document.addEventListener("DOMContentLoaded", async () => {
  const input = document.getElementById("phraseInput");
  const languageSelect = document.getElementById("languageSelect");
  const translateBtn = document.getElementById("translateBtn");
  const resultDiv = document.getElementById("translationResult");
  const copyBtn = document.getElementById("copyBtn");
  const speakBtn = document.getElementById("speakBtn");

  // 🔹 Fetch supported languages from LibreTranslate
  try {
    const response = await fetch("https://libretranslate.de/languages");
    const languages = await response.json();

    languages.forEach(lang => {
      const option = document.createElement("option");
      option.value = lang.code;
      option.textContent = lang.name;
      languageSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching languages:", error);
    languageSelect.innerHTML = "<option value='es'>Spanish</option><option value='fr'>French</option>";
  }

  translateBtn.addEventListener("click", async () => {
    const text = input.value.trim();
    const targetLang = languageSelect.value;

    if (!text) {
      resultDiv.innerHTML = "<p>Please enter a phrase to translate.</p>";
      copyBtn.style.display = "none";
      speakBtn.style.display = "none";
      return;
    }

    resultDiv.innerHTML = "<p>Translating...</p>";
    copyBtn.style.display = "none";
    speakBtn.style.display = "none";

    try {
      const response = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
          q: text,
          source: "en",
          target: targetLang,
          format: "text"
        }),
        headers: { "Content-Type": "application/json" }
      });

      const data = await response.json();

      resultDiv.innerHTML = `
        <p><strong>Original:</strong> ${text}</p>
        <p><strong>Translation:</strong> <span id="translatedText">${data.translatedText}</span></p>
      `;

      copyBtn.style.display = "inline-block";
      speakBtn.style.display = "inline-block";

    } catch (error) {
      resultDiv.innerHTML = "<p>Error translating. Please try again.</p>";
      console.error(error);
    }
  });

  // Copy translation
  copyBtn.addEventListener("click", () => {
    const translatedText = document.getElementById("translatedText");
    if (translatedText) {
      navigator.clipboard.writeText(translatedText.textContent)
        .then(() => {
          copyBtn.textContent = "Copied!";
          setTimeout(() => (copyBtn.textContent = "Copy Translation"), 2000);
        });
    }
  });

  // Speak translation aloud
  speakBtn.addEventListener("click", () => {
    const translatedText = document.getElementById("translatedText");
    if (translatedText) {
      const utterance = new SpeechSynthesisUtterance(translatedText.textContent);
      utterance.lang = languageSelect.value; // tries to match language
      speechSynthesis.speak(utterance);
    }
  });
});
