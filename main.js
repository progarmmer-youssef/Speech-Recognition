let speech = new SpeechSynthesisUtterance();
/*new SpeechSynthesisUtterance() => بتحول الكلام ل صوت   */
document.querySelector("button").addEventListener("click", () => { /* لما حد يدوس عليك اعمل كذا */
  speech.text = document.querySelector("textarea").value; /* الكلام اللي مكتوب ف الصندوق  */
  speech.lang = "ar-EG"; /* اللغة اللي هيتقال بيها */
  window.speechSynthesis.speak(speech); /* الكلام اللي هيتقال */
});
