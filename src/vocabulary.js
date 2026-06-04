function vocabItem(category, symbol, englishKey, arabicLabel, colorType, level = "beginner", imageUrl = "") {
  const id = `${category}:${englishKey.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  return {
    id,
    arabicLabel,
    englishKey,
    label: englishKey,
    category,
    symbol,
    colorType,
    type: colorType,
    level,
    isCore: category === "Core",
    imageUrl,
    symbolId: id
  };
}

export const coreVocabulary = [
  vocabItem("Core", "👦", "I", "أنا", "pronoun"),
  vocabItem("Core", "🫵", "you", "أنت", "pronoun"),
  vocabItem("Core", "🤲", "want", "أريد", "verb"),
  vocabItem("Core", "➡️", "go", "اذهب", "verb"),
  vocabItem("Core", "🛑", "stop", "توقف", "verb"),
  vocabItem("Core", "🙋", "help", "مساعدة", "verb"),
  vocabItem("Core", "➕", "more", "المزيد", "descriptor"),
  vocabItem("Core", "✅", "all done", "انتهيت", "social"),
  vocabItem("Core", "🍽️", "eat", "أكل", "verb"),
  vocabItem("Core", "🥤", "drink", "أشرب", "verb"),
  vocabItem("Core", "💗", "like", "أحب", "verb"),
  vocabItem("Core", "💪", "can", "أستطيع", "verb"),
  vocabItem("Core", "👍", "yes", "نعم", "social"),
  vocabItem("Core", "👎", "no", "لا", "social"),
  vocabItem("Core", "🧰", "need", "أحتاج", "verb", "intermediate"),
  vocabItem("Core", "🔁", "again", "مرة أخرى", "verb", "intermediate"),
  vocabItem("Core", "🏁", "finished", "انتهى", "social", "intermediate"),
  vocabItem("Core", "🔓", "open", "افتح", "verb", "intermediate"),
  vocabItem("Core", "🔒", "close", "أغلق", "verb", "intermediate"),
  vocabItem("Core", "🎁", "give", "أعطني", "verb", "intermediate"),
  vocabItem("Core", "👀", "look", "انظر", "verb", "intermediate"),
  vocabItem("Core", "👂", "listen", "اسمع", "verb", "intermediate"),
  vocabItem("Core", "🙋", "come", "تعال", "verb", "intermediate"),
  vocabItem("Core", "➕", "want more", "أريد المزيد", "verb", "intermediate"),
  vocabItem("Core", "✖️", "do not want", "لا أريد", "social", "intermediate"),
  vocabItem("Core", "🙏", "please", "من فضلك", "social", "intermediate"),
  vocabItem("Core", "💛", "thanks", "شكرا", "social", "intermediate"),
  vocabItem("Core", "👋", "hi", "مرحبا", "social", "intermediate"),
  vocabItem("Core", "👋", "bye", "وداعا", "social", "intermediate"),
  vocabItem("Core", "✖️", "don't", "لا تفعل", "social", "advanced"),
  vocabItem("Core", "💬", "because", "لأن", "social", "advanced"),
  vocabItem("Core", "🔵", "different", "مختلف", "descriptor", "advanced"),
  vocabItem("Core", "🏠", "stay home", "أبقى في المنزل", "verb", "advanced"),
  vocabItem("Core", "😴", "feel tired", "أشعر بالتعب", "descriptor", "advanced"),
  vocabItem("Core", "🗣️", "I would rather", "أفضل", "social", "advanced")
];

export const stableCoreKeys = ["I", "you", "want", "go", "stop", "help", "more", "all done", "eat", "drink", "like", "can", "yes", "no"];

export const grammarVocabulary = [
  vocabItem("Grammar", "👦", "I", "أنا", "pronoun"),
  vocabItem("Grammar", "🫵", "you", "أنت", "pronoun"),
  vocabItem("Grammar", "👨", "he", "هو", "pronoun"),
  vocabItem("Grammar", "👩", "she", "هي", "pronoun"),
  vocabItem("Grammar", "👫", "we", "نحن", "pronoun", "intermediate"),
  vocabItem("Grammar", "👥", "they", "هم", "pronoun", "intermediate"),
  vocabItem("Grammar", "↩️", "was", "كان", "social", "advanced"),
  vocabItem("Grammar", "=", "is", "يكون", "social", "intermediate"),
  vocabItem("Grammar", "📥", "in", "في", "social", "intermediate"),
  vocabItem("Grammar", "📌", "on", "على", "social", "intermediate"),
  vocabItem("Grammar", "⬇️", "under", "تحت", "social", "advanced"),
  vocabItem("Grammar", "➕", "with", "مع", "social", "intermediate"),
  vocabItem("Grammar", "➡️", "to", "إلى", "social", "intermediate"),
  vocabItem("Grammar", "⬅️", "from", "من", "social", "advanced"),
  vocabItem("Grammar", "🤲", "for me", "لي", "pronoun", "intermediate"),
  vocabItem("Grammar", "🎒", "have", "لدي", "verb", "advanced"),
  vocabItem("Grammar", "⭐", "mine", "ملكي", "pronoun", "advanced"),
  vocabItem("Grammar", "👉", "this", "هذا", "pronoun", "intermediate"),
  vocabItem("Grammar", "👉", "this feminine", "هذه", "pronoun", "intermediate"),
  vocabItem("Grammar", "👈", "that", "ذلك", "pronoun", "advanced"),
  vocabItem("Grammar", "📍", "there", "هناك", "social", "advanced")
];

export const questionVocabulary = [
  vocabItem("Questions", "❓", "what", "ماذا", "question"),
  vocabItem("Questions", "📍", "where", "أين", "question"),
  vocabItem("Questions", "👤", "who", "من", "question", "intermediate"),
  vocabItem("Questions", "⏰", "when", "متى", "question", "intermediate"),
  vocabItem("Questions", "🤔", "why", "لماذا", "question", "intermediate"),
  vocabItem("Questions", "🧭", "how", "كيف", "question", "advanced"),
  vocabItem("Questions", "؟", "question marker", "هل", "question", "intermediate"),
  vocabItem("Questions", "☝️", "which", "أي", "question", "advanced"),
  vocabItem("Questions", "🔢", "how many", "كم", "question", "advanced")
];

export const timeVocabulary = [
  vocabItem("Time", "⏱️", "now", "الآن", "social"),
  vocabItem("Time", "⏳", "later", "لاحقاً", "social"),
  vocabItem("Time", "📅", "today", "اليوم", "noun", "intermediate"),
  vocabItem("Time", "↩️", "yesterday", "أمس", "noun", "intermediate"),
  vocabItem("Time", "➡️", "tomorrow", "غداً", "noun", "intermediate"),
  vocabItem("Time", "🌅", "morning", "صباح", "noun", "intermediate"),
  vocabItem("Time", "🌙", "evening", "مساء", "noun", "intermediate"),
  vocabItem("Time", "⬅️", "before", "قبل", "social", "advanced"),
  vocabItem("Time", "➡️", "after", "بعد", "social", "advanced"),
  vocabItem("Time", "✋", "wait", "انتظر", "verb")
];

export const medicalVocabulary = [
  vocabItem("Medical", "🩹", "pain", "ألم", "medical"),
  vocabItem("Medical", "🍽️", "hungry", "جائع", "medical"),
  vocabItem("Medical", "💧", "thirsty", "عطشان", "medical"),
  vocabItem("Medical", "🚻", "bathroom", "الحمام", "medical"),
  vocabItem("Medical", "😴", "tired", "تعبان", "medical"),
  vocabItem("Medical", "🤒", "sick", "مريض", "medical"),
  vocabItem("Medical", "💊", "medicine", "دواء", "medical", "intermediate"),
  vocabItem("Medical", "🧑‍⚕️", "doctor", "طبيب", "medical"),
  vocabItem("Medical", "🌡️", "fever", "حرارة", "medical", "intermediate"),
  vocabItem("Medical", "🚑", "emergency", "طوارئ", "medical"),
  vocabItem("Medical", "📍", "pain here", "ألم هنا", "medical", "intermediate"),
  vocabItem("Medical", "🙋", "need help", "أحتاج مساعدة", "medical"),
  vocabItem("Medical", "🩹", "hurt", "يؤلمني", "medical", "intermediate"),
  vocabItem("Medical", "🤕", "headache", "صداع", "medical", "advanced"),
  vocabItem("Medical", "🫁", "breathe", "أتنفس", "medical", "advanced"),
  vocabItem("Medical", "🧘", "break", "استراحة", "medical"),
  vocabItem("Medical", "🤲", "stomach hurts", "بطني يؤلمني", "medical", "intermediate"),
  vocabItem("Medical", "🤕", "head hurts", "رأسي يؤلمني", "medical", "intermediate"),
  vocabItem("Medical", "🥶", "feel cold", "أشعر بالبرد", "medical", "intermediate"),
  vocabItem("Medical", "🥵", "feel hot", "أشعر بالحر", "medical", "intermediate"),
  vocabItem("Medical", "🛏️", "need rest", "أحتاج راحة", "medical", "intermediate"),
  vocabItem("Medical", "📞", "call doctor", "اتصل بالطبيب", "medical", "advanced")
];

export const quickPhraseVocabulary = [
  vocabItem("QuickPhrases", "🗣️", "I want", "أنا أريد", "social"),
  vocabItem("QuickPhrases", "✖️", "do not want", "لا أريد", "social"),
  vocabItem("QuickPhrases", "🙋", "want help", "أريد مساعدة", "social"),
  vocabItem("QuickPhrases", "😴", "I am tired", "أنا تعبان", "descriptor"),
  vocabItem("QuickPhrases", "🚻", "want bathroom", "أريد الحمام", "social"),
  vocabItem("QuickPhrases", "🏠", "go home", "أريد الذهاب إلى المنزل", "social", "intermediate"),
  vocabItem("QuickPhrases", "🍽️", "I am hungry", "أنا جائع", "descriptor"),
  vocabItem("QuickPhrases", "💧", "I am thirsty", "أنا عطشان", "descriptor"),
  vocabItem("QuickPhrases", "😢", "I am sad", "أنا حزين", "descriptor"),
  vocabItem("QuickPhrases", "😊", "I am happy", "أنا سعيد", "descriptor"),
  vocabItem("QuickPhrases", "🛑", "stop please", "توقف من فضلك", "social", "intermediate"),
  vocabItem("QuickPhrases", "💛", "thanks", "شكراً", "social"),
  vocabItem("QuickPhrases", "🙏", "please", "من فضلك", "social"),
  vocabItem("QuickPhrases", "❓", "where is it", "أين هو؟", "question", "intermediate"),
  vocabItem("QuickPhrases", "👩", "where is mom", "أين أمي؟", "question", "intermediate"),
  vocabItem("QuickPhrases", "🧘", "need break", "أحتاج استراحة", "social"),
  vocabItem("QuickPhrases", "🤔", "do not understand", "لا أفهم", "social", "intermediate"),
  vocabItem("QuickPhrases", "🔁", "repeat that", "أعد ذلك", "social", "intermediate"),
  vocabItem("QuickPhrases", "🙋", "help me", "ساعدني", "social"),
  vocabItem("QuickPhrases", "✅", "I am okay", "أنا بخير", "descriptor"),
  vocabItem("QuickPhrases", "🎮", "want play", "أريد اللعب", "social"),
  vocabItem("QuickPhrases", "🍽️", "want eat", "أريد الأكل", "social"),
  vocabItem("QuickPhrases", "🥤", "want drink", "أريد الشرب", "social")
];

export const fringeVocabulary = {
  People: [
    vocabItem("People", "👩", "mom", "أمي", "noun"),
    vocabItem("People", "👨", "dad", "أبي", "noun"),
    vocabItem("People", "👦", "brother", "أخ", "noun"),
    vocabItem("People", "👧", "sister", "أخت", "noun"),
    vocabItem("People", "👴", "grandpa", "جد", "noun"),
    vocabItem("People", "👵", "grandma", "جدة", "noun"),
    vocabItem("People", "🧑‍🤝‍🧑", "friend", "صديق", "noun"),
    vocabItem("People", "👩‍🏫", "teacher", "معلم", "noun"),
    vocabItem("People", "🧑‍⚕️", "doctor", "طبيب", "noun"),
    vocabItem("People", "👧", "girl", "بنت", "noun"),
    vocabItem("People", "👦", "boy", "ولد", "noun"),
    vocabItem("People", "👨", "he", "هو", "pronoun", "intermediate"),
    vocabItem("People", "👩", "she", "هي", "pronoun", "intermediate"),
    vocabItem("People", "👫", "we", "نحن", "pronoun", "intermediate"),
    vocabItem("People", "👥", "they", "هم", "pronoun", "intermediate"),
    vocabItem("People", "🧑‍🍳", "cook", "طباخ", "noun", "advanced"),
    vocabItem("People", "🧑‍💻", "therapist", "معالج", "noun", "advanced")
  ],
  Food: [
    vocabItem("Food", "🍕", "pizza", "بيتزا", "noun"),
    vocabItem("Food", "🍎", "apple", "تفاحة", "noun"),
    vocabItem("Food", "🍌", "banana", "موز", "noun"),
    vocabItem("Food", "🥪", "sandwich", "شطيرة", "noun", "intermediate"),
    vocabItem("Food", "🍚", "rice", "أرز", "noun", "intermediate"),
    vocabItem("Food", "🍝", "pasta", "معكرونة", "noun", "intermediate"),
    vocabItem("Food", "🍰", "cake", "كعكة", "noun"),
    vocabItem("Food", "🍫", "chocolate", "شوكولاتة", "noun", "intermediate"),
    vocabItem("Food", "🥣", "cereal", "حبوب", "noun", "advanced"),
    vocabItem("Food", "🥕", "carrot", "جزر", "noun", "advanced"),
    vocabItem("Food", "🍟", "fries", "بطاطس مقلية", "noun"),
    vocabItem("Food", "🍦", "ice cream", "آيس كريم", "noun")
  ],
  Drinks: [
    vocabItem("Drinks", "💧", "water", "ماء", "noun"),
    vocabItem("Drinks", "🥛", "milk", "حليب", "noun"),
    vocabItem("Drinks", "🧃", "juice", "عصير", "noun"),
    vocabItem("Drinks", "☕", "tea", "شاي", "noun", "intermediate"),
    vocabItem("Drinks", "🥤", "soda", "مشروب غازي", "noun", "intermediate"),
    vocabItem("Drinks", "🍫", "hot chocolate", "شوكولاتة ساخنة", "noun", "advanced"),
    vocabItem("Drinks", "🧊", "cold", "بارد", "descriptor", "intermediate"),
    vocabItem("Drinks", "🔥", "hot", "ساخن", "descriptor", "intermediate")
  ],
  Actions: [
    vocabItem("Actions", "🏃", "run", "أركض", "verb"),
    vocabItem("Actions", "🎮", "play", "ألعب", "verb"),
    vocabItem("Actions", "👀", "see", "أرى", "verb", "intermediate"),
    vocabItem("Actions", "👀", "look", "انظر", "verb", "intermediate"),
    vocabItem("Actions", "✍️", "write", "أكتب", "verb", "intermediate"),
    vocabItem("Actions", "👂", "listen", "اسمع", "verb", "intermediate"),
    vocabItem("Actions", "📖", "read", "أقرأ", "verb", "advanced"),
    vocabItem("Actions", "🧼", "wash", "أغسل", "verb", "advanced"),
    vocabItem("Actions", "🛌", "sleep", "أنام", "verb"),
    vocabItem("Actions", "🎁", "give", "أعطني", "verb", "advanced"),
    vocabItem("Actions", "📦", "put", "أضع", "verb", "advanced")
  ],
  Feelings: [
    vocabItem("Feelings", "😊", "happy", "سعيد", "descriptor"),
    vocabItem("Feelings", "😢", "sad", "حزين", "descriptor"),
    vocabItem("Feelings", "😡", "mad", "غاضب", "descriptor"),
    vocabItem("Feelings", "😨", "scared", "خائف", "descriptor", "intermediate"),
    vocabItem("Feelings", "😴", "tired", "تعبان", "descriptor"),
    vocabItem("Feelings", "🤒", "sick", "مريض", "descriptor", "intermediate"),
    vocabItem("Feelings", "🤩", "excited", "متحمس", "descriptor", "advanced"),
    vocabItem("Feelings", "😌", "calm", "هادئ", "descriptor", "advanced"),
    vocabItem("Feelings", "🫶", "safe", "آمن", "descriptor", "advanced"),
    vocabItem("Feelings", "🧠", "overwhelmed", "مرهق", "descriptor", "advanced")
  ],
  Places: [
    vocabItem("Places", "🏠", "home", "المنزل", "noun"),
    vocabItem("Places", "🏫", "school", "المدرسة", "noun"),
    vocabItem("Places", "🚪", "classroom", "الصف", "noun"),
    vocabItem("Places", "🍳", "kitchen", "المطبخ", "noun"),
    vocabItem("Places", "🚻", "bathroom", "الحمام", "noun"),
    vocabItem("Places", "🏥", "hospital", "المستشفى", "noun", "intermediate"),
    vocabItem("Places", "🛝", "park", "الحديقة", "noun"),
    vocabItem("Places", "🚗", "car", "السيارة", "noun"),
    vocabItem("Places", "🛒", "store", "المتجر", "noun", "intermediate"),
    vocabItem("Places", "🕌", "mosque", "المسجد", "noun", "intermediate")
  ],
  Family: [
    vocabItem("Family", "👩", "mom", "أمي", "noun"),
    vocabItem("Family", "👨", "dad", "أبي", "noun"),
    vocabItem("Family", "👦", "brother", "أخ", "noun"),
    vocabItem("Family", "👧", "sister", "أخت", "noun"),
    vocabItem("Family", "👴", "grandpa", "جد", "noun"),
    vocabItem("Family", "👵", "grandma", "جدة", "noun"),
    vocabItem("Family", "🧒", "cousin Ahmed", "ابن عمي أحمد", "noun", "intermediate"),
    vocabItem("Family", "👶", "baby", "طفل", "noun", "intermediate"),
    vocabItem("Family", "🐶", "dog", "كلب", "noun", "advanced"),
    vocabItem("Family", "🐱", "cat", "قطة", "noun", "advanced")
  ]
};

export const vocabulary = {
  Core: coreVocabulary,
  People: fringeVocabulary.People,
  Food: fringeVocabulary.Food,
  Drinks: fringeVocabulary.Drinks,
  Actions: fringeVocabulary.Actions,
  Feelings: fringeVocabulary.Feelings,
  Questions: questionVocabulary,
  Grammar: grammarVocabulary,
  Time: timeVocabulary,
  QuickPhrases: quickPhraseVocabulary,
  Places: fringeVocabulary.Places,
  Medical: medicalVocabulary,
  Family: fringeVocabulary.Family
};

export const folderTitles = {
  Core: "Core words for everyday communication",
  People: "People, pronouns, names, and roles",
  Food: "Foods, snacks, and mealtime words",
  Drinks: "Drinks and temperature words",
  Actions: "Action words for doing and requesting",
  Feelings: "Feelings, body state, and self-advocacy",
  Questions: "Question words for conversation",
  Grammar: "Grammar words for Arabic sentence building",
  Time: "Time words for routines and waiting",
  QuickPhrases: "Quick phrases for urgent everyday messages",
  Places: "Places for school, home, and community",
  Medical: "Health words for urgent needs",
  Family: "Family names and familiar people"
};
