import { translate } from './translate.js';

function translateText() {
  const inputText = document.getElementById("inputText").value;
  const language = document.getElementById("language").value;
  const translated = translate(language, inputText);
  document.getElementById("translatedText").innerHTML = `Translation: ${translated}`;
}

window.translateText = translateText;


