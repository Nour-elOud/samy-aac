const translations = {
  "en-US": {
    I: "I",
    you: "you",
    want: "want",
    go: "go",
    stop: "stop",
    help: "help",
    more: "more",
    "all done": "all done",
    like: "like",
    "don't": "don't",
    can: "can",
    where: "where",
    what: "what",
    eat: "eat",
    drink: "drink",
    need: "need",
    because: "because",
    different: "different",
    pizza: "pizza",
    doctor: "doctor",
    happy: "happy"
  },
  ar: {
    I: "أنا",
    you: "أنت",
    want: "أريد",
    go: "اذهب",
    stop: "توقف",
    help: "مساعدة",
    more: "المزيد",
    "all done": "انتهيت",
    like: "أحب",
    "don't": "لا",
    can: "أستطيع",
    where: "أين",
    what: "ماذا",
    eat: "آكل",
    drink: "أشرب",
    need: "أحتاج",
    because: "لأن",
    different: "مختلف",
    pizza: "بيتزا",
    doctor: "طبيب",
    happy: "سعيد"
  },
  "fr-FR": {
    I: "je",
    you: "tu",
    want: "veux",
    go: "aller",
    stop: "stop",
    help: "aide",
    more: "encore",
    "all done": "fini",
    like: "aime",
    "don't": "ne pas",
    can: "peux",
    where: "où",
    what: "quoi",
    eat: "manger",
    drink: "boire",
    need: "besoin",
    because: "parce que",
    different: "différent",
    pizza: "pizza",
    doctor: "docteur",
    happy: "content"
  },
  "nl-NL": {
    I: "ik",
    you: "jij",
    want: "wil",
    go: "gaan",
    stop: "stop",
    help: "help",
    more: "meer",
    "all done": "klaar",
    like: "leuk",
    "don't": "niet",
    can: "kan",
    where: "waar",
    what: "wat",
    eat: "eten",
    drink: "drinken",
    need: "nodig",
    because: "omdat",
    different: "anders",
    pizza: "pizza",
    doctor: "dokter",
    happy: "blij"
  }
};

const vocabulary = {
  Core: [
    ["👦", "I", "pronoun", "beginner"],
    ["🫵", "you", "pronoun", "beginner"],
    ["🤲", "want", "verb", "intermediate"],
    ["➡️", "go", "verb", "beginner"],
    ["🛑", "stop", "verb", "beginner"],
    ["🙋", "help", "verb", "beginner"],
    ["➕", "more", "descriptor", "beginner"],
    ["✅", "all done", "social", "beginner"],
    ["💗", "like", "verb", "intermediate"],
    ["✖️", "don't", "little", "intermediate"],
    ["💪", "can", "little", "intermediate"],
    ["📍", "where", "question", "intermediate"],
    ["❓", "what", "question", "intermediate"],
    ["🍽️", "eat", "verb", "beginner"],
    ["🥤", "drink", "verb", "beginner"],
    ["🧰", "need", "verb", "intermediate"],
    ["💬", "because", "little", "intermediate"],
    ["🔵", "different", "descriptor", "intermediate"],
    ["🏠", "stay home", "verb", "advanced"],
    ["😴", "feel tired", "descriptor", "advanced"],
    ["🗣️", "I would rather", "little", "advanced"],
    ["🧩", "make sentence", "little", "advanced"]
  ],
  People: [
    ["👧", "girl", "pronoun", "beginner"],
    ["👦", "boy", "pronoun", "beginner"],
    ["🧑", "I", "pronoun", "beginner"],
    ["👫", "we", "pronoun", "intermediate"],
    ["👨", "he", "pronoun", "intermediate"],
    ["👩", "she", "pronoun", "intermediate"],
    ["👥", "they", "pronoun", "intermediate"],
    ["👩‍🏫", "teacher", "noun", "beginner"],
    ["🧑‍⚕️", "doctor", "noun", "intermediate"],
    ["🧑‍🍳", "cook", "noun", "advanced"],
    ["🧑‍🦽", "friend", "noun", "beginner"],
    ["🧑‍💻", "therapist", "noun", "advanced"]
  ],
  Food: [
    ["🍕", "pizza", "noun", "beginner"],
    ["🍎", "apple", "noun", "beginner"],
    ["🍌", "banana", "noun", "beginner"],
    ["🥪", "sandwich", "noun", "intermediate"],
    ["🍚", "rice", "noun", "intermediate"],
    ["🍝", "pasta", "noun", "intermediate"],
    ["🍰", "cake", "noun", "beginner"],
    ["🍫", "chocolate", "noun", "intermediate"],
    ["🥣", "cereal", "noun", "advanced"],
    ["🥕", "carrot", "noun", "advanced"],
    ["🍟", "fries", "noun", "beginner"],
    ["🍦", "ice cream", "noun", "beginner"]
  ],
  Drinks: [
    ["💧", "water", "noun", "beginner"],
    ["🥛", "milk", "noun", "beginner"],
    ["🧃", "juice", "noun", "beginner"],
    ["☕", "tea", "noun", "intermediate"],
    ["🥤", "soda", "noun", "intermediate"],
    ["🍫", "hot chocolate", "noun", "advanced"],
    ["🧊", "cold", "descriptor", "intermediate"],
    ["🔥", "hot", "descriptor", "intermediate"]
  ],
  Actions: [
    ["🍽️", "eat", "verb", "beginner"],
    ["🥤", "drink", "verb", "beginner"],
    ["🏃", "run", "verb", "beginner"],
    ["🎮", "play", "verb", "beginner"],
    ["👀", "see", "verb", "intermediate"],
    ["✍️", "write", "verb", "intermediate"],
    ["👂", "listen", "verb", "intermediate"],
    ["📖", "read", "verb", "advanced"],
    ["🧼", "wash", "verb", "advanced"],
    ["🛌", "sleep", "verb", "beginner"],
    ["🎁", "give", "verb", "advanced"],
    ["📦", "put", "verb", "advanced"]
  ],
  Feelings: [
    ["😊", "happy", "descriptor", "beginner"],
    ["😢", "sad", "descriptor", "beginner"],
    ["😡", "mad", "descriptor", "beginner"],
    ["😨", "scared", "descriptor", "intermediate"],
    ["😴", "tired", "descriptor", "beginner"],
    ["🤒", "sick", "descriptor", "intermediate"],
    ["🤩", "excited", "descriptor", "advanced"],
    ["😌", "calm", "descriptor", "advanced"],
    ["🫶", "safe", "descriptor", "advanced"],
    ["🧠", "overwhelmed", "descriptor", "advanced"]
  ],
  Questions: [
    ["❓", "what", "question", "beginner"],
    ["📍", "where", "question", "beginner"],
    ["👤", "who", "question", "intermediate"],
    ["⏰", "when", "question", "intermediate"],
    ["🤔", "why", "question", "intermediate"],
    ["🧭", "how", "question", "advanced"],
    ["✅", "yes", "social", "beginner"],
    ["✖️", "no", "social", "beginner"]
  ],
  Places: [
    ["🏠", "home", "noun", "beginner"],
    ["🏫", "school", "noun", "beginner"],
    ["🛝", "park", "noun", "beginner"],
    ["🏥", "hospital", "noun", "intermediate"],
    ["🍽️", "restaurant", "noun", "intermediate"],
    ["🛒", "store", "noun", "intermediate"],
    ["🚌", "bus", "noun", "advanced"],
    ["🏊", "pool", "noun", "advanced"]
  ],
  Medical: [
    ["🩹", "hurt", "descriptor", "beginner"],
    ["🧑‍⚕️", "doctor", "noun", "beginner"],
    ["💊", "medicine", "noun", "intermediate"],
    ["🌡️", "fever", "noun", "intermediate"],
    ["🤕", "headache", "noun", "advanced"],
    ["🫁", "breathe", "verb", "advanced"],
    ["🚑", "emergency", "noun", "advanced"],
    ["🧘", "break", "noun", "beginner"]
  ],
  Family: [
    ["👩", "mom", "noun", "beginner"],
    ["👨", "dad", "noun", "beginner"],
    ["👵", "grandma", "noun", "beginner"],
    ["👴", "grandpa", "noun", "beginner"],
    ["🧒", "cousin Ahmed", "noun", "intermediate"],
    ["👶", "baby", "noun", "intermediate"],
    ["🐶", "dog", "noun", "advanced"],
    ["🐱", "cat", "noun", "advanced"]
  ]
};

const folderTitles = {
  Core: "Core words for everyday communication",
  People: "People, pronouns, names, and roles",
  Food: "Foods, snacks, and mealtime words",
  Drinks: "Drinks and temperature words",
  Actions: "Action words for doing and requesting",
  Feelings: "Feelings, body state, and self-advocacy",
  Questions: "Question words for conversation",
  Places: "Places for school, home, and community",
  Medical: "Health words for urgent needs",
  Family: "Family names and familiar people"
};

const levelOrder = { beginner: 0, intermediate: 1, advanced: 2 };
const gridSizes = {
  "3x3": [3, 9],
  "4x4": [4, 16],
  "5x5": [5, 25],
  "6x6": [6, 36],
  "7x11": [11, 77],
  "12x12": [12, 144]
};

const predictions = [
  "I want",
  "I need",
  "help",
  "more",
  "all done",
  "because",
  "where",
  "pizza",
  "doctor",
  "play",
  "happy"
];

const state = {
  category: "Core",
  level: "intermediate",
  grid: "6x6",
  language: "en-US",
  mode: "symbols",
  message: [],
  voices: [],
  selectedVoiceURI: "",
  personalWords: [
    ["🎮", "Minecraft", "noun", "beginner"],
    ["🧱", "Roblox", "noun", "beginner"],
    ["🚌", "school bus", "noun", "intermediate"]
  ]
};

const elements = {
  wordGrid: document.querySelector("#wordGrid"),
  messageContent: document.querySelector("#messageContent"),
  levelSelect: document.querySelector("#levelSelect"),
  gridSelect: document.querySelector("#gridSelect"),
  languageSelect: document.querySelector("#languageSelect"),
  voiceSelect: document.querySelector("#voiceSelect"),
  categoryTitle: document.querySelector("#categoryTitle"),
  categoryEyebrow: document.querySelector("#categoryEyebrow"),
  keyboardPanel: document.querySelector("#keyboardPanel"),
  letterGrid: document.querySelector("#letterGrid"),
  predictionRow: document.querySelector("#predictionRow"),
  typedInput: document.querySelector("#typedInput"),
  personalList: document.querySelector("#personalList")
};

function translate(label) {
  return translations[state.language]?.[label] || label;
}

function wordObject(item) {
  const [symbol, label, type, level] = item;
  return { symbol, label, type, level };
}

function getVisibleWords() {
  const maxLevel = levelOrder[state.level];
  const categoryWords = (vocabulary[state.category] || []).filter(
    (item) => levelOrder[item[3]] <= maxLevel
  );
  const coreWords = vocabulary.Core.filter((item) => levelOrder[item[3]] <= maxLevel);
  const personal = state.personalWords.filter((item) => levelOrder[item[3]] <= maxLevel);
  const merged = state.category === "Core" ? [...coreWords, ...personal] : [...categoryWords, ...coreWords, ...personal];
  const seen = new Set();
  return merged
    .filter((item) => {
      const key = item[1];
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map(wordObject);
}

function fitWordsToGrid(words, count) {
  if (words.length >= count) return words.slice(0, count);
  const pool = Object.values(vocabulary).flat().map(wordObject);
  const used = new Set(words.map((word) => word.label));
  const additions = pool.filter((word) => !used.has(word.label));
  return [...words, ...additions].slice(0, count);
}

function renderWords() {
  const [columns, count] = gridSizes[state.grid];
  const words = fitWordsToGrid(getVisibleWords(), count);
  elements.wordGrid.style.setProperty("--cols", columns);
  elements.wordGrid.innerHTML = words.map(renderWordButton).join("");
  elements.categoryTitle.textContent = folderTitles[state.category];
  elements.categoryEyebrow.textContent = `${state.category} folder`;
}

function renderWordButton(word) {
  const image = word.symbol.startsWith("data:")
    ? `<img src="${word.symbol}" alt="" />`
    : word.symbol;
  return `
    <button class="word-button ${word.type}" type="button" data-word="${escapeHtml(word.label)}" data-symbol="${escapeHtml(word.symbol)}" aria-label="${escapeHtml(word.label)}">
      <span class="corner" aria-hidden="true"></span>
      <span class="symbol" aria-hidden="true">${image}</span>
      <span class="label">${escapeHtml(translate(word.label))}</span>
    </button>
  `;
}

function renderMessage() {
  if (!state.message.length) {
    elements.messageContent.innerHTML = `<span class="placeholder">Tap words or type to build a message</span>`;
    return;
  }
  elements.messageContent.innerHTML = state.message
    .map((word) => {
      const symbol = word.symbol?.startsWith("data:")
        ? `<img src="${word.symbol}" alt="" width="32" height="32" />`
        : `<span class="token-symbol" aria-hidden="true">${escapeHtml(word.symbol || "⌨")}</span>`;
      return `<span class="token">${symbol}<span>${escapeHtml(translate(word.label))}</span></span>`;
    })
    .join("");
  elements.messageContent.scrollLeft = elements.messageContent.scrollWidth;
}

function renderKeyboard(mode = state.mode) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const qwerty = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
  const keys = mode === "qwerty" ? qwerty : alphabet;
  elements.letterGrid.innerHTML = [
    ...keys.map((letter) => `<button type="button" data-key="${letter.toLowerCase()}">${letter}</button>`),
    `<button type="button" data-key=" ">Space</button>`,
    `<button type="button" data-key="backspace">⌫</button>`
  ].join("");
}

function renderPredictions() {
  const query = elements.typedInput.value.trim().toLowerCase();
  const visible = predictions
    .filter((word) => !query || word.toLowerCase().startsWith(query) || word.toLowerCase().includes(query))
    .slice(0, 5);
  elements.predictionRow.innerHTML = visible
    .map((word) => `<button type="button" data-predict="${escapeHtml(word)}">${escapeHtml(word)}</button>`)
    .join("");
}

function renderPersonalWords() {
  elements.personalList.innerHTML = state.personalWords
    .map(wordObject)
    .slice(-6)
    .map(renderWordButton)
    .join("");
}

function addWord(label, symbol = "⌨") {
  const phrase = label.trim();
  if (!phrase) return;
  state.message.push({ label: phrase, symbol });
  renderMessage();
}

function speak(text = getMessageText()) {
  const phrase = text.trim();
  if (!phrase) return;
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = state.language;
  const voice = state.voices.find((item) => item.voiceURI === state.selectedVoiceURI);
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function getMessageText() {
  return state.message.map((word) => translate(word.label)).join(" ");
}

function populateVoices() {
  state.voices = window.speechSynthesis?.getVoices?.() || [];
  const voicesForLanguage = state.voices.filter((voice) =>
    voice.lang.toLowerCase().startsWith(state.language.toLowerCase().slice(0, 2))
  );
  const usableVoices = voicesForLanguage.length ? voicesForLanguage : state.voices;
  if (!usableVoices.length) {
    elements.voiceSelect.innerHTML = `<option value="">Device default voice</option>`;
    return;
  }
  elements.voiceSelect.innerHTML = usableVoices
    .slice(0, 100)
    .map((voice) => `<option value="${escapeHtml(voice.voiceURI)}">${escapeHtml(voice.name)} (${voice.lang})</option>`)
    .join("");
  if (!usableVoices.some((voice) => voice.voiceURI === state.selectedVoiceURI)) {
    state.selectedVoiceURI = usableVoices[0]?.voiceURI || "";
  }
  elements.voiceSelect.value = state.selectedVoiceURI;
}

function setMode(mode) {
  state.mode = mode;
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.mode === mode);
  });
  const keyboardMode = mode === "alphabet" || mode === "qwerty";
  elements.wordGrid.classList.toggle("hidden", keyboardMode);
  elements.keyboardPanel.classList.toggle("hidden", !keyboardMode);
  if (keyboardMode) {
    renderKeyboard(mode);
    renderPredictions();
    elements.typedInput.focus();
  }
}

function addCustomWord() {
  const wordInput = document.querySelector("#customWord");
  const symbolInput = document.querySelector("#customSymbol");
  const imageInput = document.querySelector("#customImage");
  const label = wordInput.value.trim();
  if (!label) return;
  const file = imageInput.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      state.personalWords.push([reader.result, label, "noun", "beginner"]);
      imageInput.value = "";
      renderWords();
      renderPersonalWords();
    });
    reader.readAsDataURL(file);
    return;
  }
  state.personalWords.push([symbolInput.value.trim() || "⭐", label, "noun", "beginner"]);
  renderWords();
  renderPersonalWords();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

document.addEventListener("click", (event) => {
  const wordButton = event.target.closest(".word-button");
  if (wordButton) {
    addWord(wordButton.dataset.word, wordButton.dataset.symbol);
    return;
  }

  const folder = event.target.closest(".folder");
  if (folder) {
    state.category = folder.dataset.category;
    document.querySelectorAll(".folder").forEach((item) => item.classList.toggle("active", item === folder));
    renderWords();
    return;
  }

  const tab = event.target.closest(".tab");
  if (tab) {
    setMode(tab.dataset.mode);
    return;
  }

  const prediction = event.target.closest("[data-predict]");
  if (prediction) {
    elements.typedInput.value = prediction.dataset.predict;
    renderPredictions();
    return;
  }

  const key = event.target.closest("[data-key]");
  if (key) {
    const value = key.dataset.key;
    if (value === "backspace") {
      elements.typedInput.value = elements.typedInput.value.slice(0, -1);
    } else {
      elements.typedInput.value += value;
    }
    renderPredictions();
  }
});

document.querySelector("#speakButton").addEventListener("click", () => speak());
document.querySelector("#clearButton").addEventListener("click", () => {
  state.message = [];
  renderMessage();
});
document.querySelector("#backspaceButton").addEventListener("click", () => {
  state.message.pop();
  renderMessage();
});
document.querySelector("#homeButton").addEventListener("click", () => {
  document.querySelector('[data-category="Core"]').click();
});
document.querySelector("#addTypedButton").addEventListener("click", () => {
  addWord(elements.typedInput.value, "⌨");
  elements.typedInput.value = "";
  renderPredictions();
});
document.querySelector("#addCustomButton").addEventListener("click", addCustomWord);

document.querySelectorAll(".voice-stack button").forEach((button) => {
  button.addEventListener("click", () => speak(button.dataset.demo));
});

elements.levelSelect.addEventListener("change", (event) => {
  state.level = event.target.value;
  renderWords();
});
elements.gridSelect.addEventListener("change", (event) => {
  state.grid = event.target.value;
  renderWords();
});
elements.languageSelect.addEventListener("change", (event) => {
  state.language = event.target.value;
  document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";
  populateVoices();
  renderWords();
  renderMessage();
});
elements.voiceSelect.addEventListener("change", (event) => {
  state.selectedVoiceURI = event.target.value;
});
elements.typedInput.addEventListener("input", renderPredictions);
elements.typedInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addWord(elements.typedInput.value, "⌨");
    elements.typedInput.value = "";
    renderPredictions();
  }
});
document.querySelector("#largeToggle").addEventListener("change", (event) => {
  document.body.classList.toggle("large-mode", event.target.checked);
});
document.querySelector("#keyguardToggle").addEventListener("change", (event) => {
  document.body.classList.toggle("keyguard-mode", event.target.checked);
});
document.querySelector("#contrastToggle").addEventListener("change", (event) => {
  document.body.classList.toggle("contrast-mode", event.target.checked);
});

if ("speechSynthesis" in window) {
  populateVoices();
  window.speechSynthesis.addEventListener("voiceschanged", populateVoices);
} else {
  elements.voiceSelect.innerHTML = `<option value="">Speech unavailable</option>`;
}

renderWords();
renderMessage();
renderKeyboard("alphabet");
renderPredictions();
renderPersonalWords();
