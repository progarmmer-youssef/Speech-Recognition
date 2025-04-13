let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click", () => {
  const text = document.querySelector("textarea").value;
  speech.text = text;

  // لو الكلام فيه حروف عربي، خليه ينطقه بالعربي، غير كده انجليزي
  const isArabic = /[\u0600-\u06FF]/.test(text);
  speech.lang = isArabic ? "ar-EG" : "en-US";

  window.speechSynthesis.speak(speech);
});
