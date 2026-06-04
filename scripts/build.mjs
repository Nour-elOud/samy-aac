import { mkdir, readFile, rm, writeFile, readdir, copyFile } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const srcDir = join(root, "src");
const publicDir = join(root, "public");
const distDir = join(root, "dist");
const clientDir = join(distDir, "client");
const serverDir = join(distDir, "server");
const metaDir = join(distDir, "_appgen_meta");

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

await rm(distDir, { recursive: true, force: true });
await mkdir(clientDir, { recursive: true });
await mkdir(serverDir, { recursive: true });
await mkdir(metaDir, { recursive: true });

await copyDirectory(srcDir, clientDir);
await copyDirectory(publicDir, clientDir);
await copyFile(join(root, ".openai", "hosting.json"), join(metaDir, "appgarden.json"));

const assets = await collectAssets(clientDir);
const worker = generateWorker(assets);
await writeFile(join(serverDir, "index.js"), worker);

async function copyDirectory(from, to) {
  await mkdir(to, { recursive: true });
  let entries = [];
  try {
    entries = await readdir(from, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return;
    throw error;
  }
  for (const entry of entries) {
    const source = join(from, entry.name);
    const destination = join(to, entry.name);
    if (entry.isDirectory()) {
      await copyDirectory(source, destination);
    } else {
      await copyFile(source, destination);
    }
  }
}

async function collectAssets(dir, base = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const absolute = join(dir, entry.name);
    const relative = `${base}/${entry.name}`;
    if (entry.isDirectory()) {
      results.push(...(await collectAssets(absolute, relative)));
    } else {
      const bytes = await readFile(absolute);
      const path = relative === "/index.html" ? "/" : relative;
      const type = contentTypes[extname(entry.name).toLowerCase()] || "application/octet-stream";
      results.push({ path, type, base64: bytes.toString("base64") });
      if (relative === "/index.html") {
        results.push({ path: "/index.html", type, base64: bytes.toString("base64") });
      }
    }
  }
  return results;
}

function generateWorker(assets) {
  const manifest = JSON.stringify(Object.fromEntries(assets.map((asset) => [asset.path, asset])), null, 2);
  return `const ASSETS = ${manifest};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const normalizedPath = url.pathname.endsWith("/") && url.pathname !== "/" ? url.pathname.slice(0, -1) : url.pathname;
    const asset = ASSETS[normalizedPath] || ASSETS[\`\${normalizedPath}/index.html\`] || ASSETS["/"];
    const headers = {
      "content-type": asset.type,
      "cache-control": asset.path === "/" || asset.path === "/index.html" ? "no-cache" : "public, max-age=31536000, immutable"
    };
    return new Response(base64ToBytes(asset.base64), { headers });
  }
};

function base64ToBytes(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}
`;
}
