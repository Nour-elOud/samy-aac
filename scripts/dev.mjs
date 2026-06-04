import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const srcDir = join(root, "src");
const publicDir = join(root, "public");
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp"
};

createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://localhost:${port}`);
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const candidates = [join(srcDir, safePath), join(publicDir, safePath)];
  for (const candidate of candidates) {
    try {
      const data = await readFile(candidate);
      response.writeHead(200, { "content-type": contentTypes[extname(candidate)] || "application/octet-stream" });
      response.end(data);
      return;
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
  response.end("Not found");
}).listen(port, () => {
  console.log(`Samy dev server running at http://localhost:${port}`);
});
