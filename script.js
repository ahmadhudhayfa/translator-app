import { translate } from './translate.js';

function translateText() {
  const inputText = document.getElementById("inputText").value;
  const language = document.getElementById("language").value;
  const translated = translate(language, inputText);
  document.getElementById("translatedText").innerHTML = `Translation: ${translated}`;
}

// Attach the function to the window object to make it accessible globally
window.translateText = translateText;