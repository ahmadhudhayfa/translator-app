const translations = {
    "malay": {
      "morning": "pagi"
    },
  };
  
  export function translate(language, inputText) {
    const word = translations[language][inputText]
    if (word) {
      return word;
    } else {
      return 'not found';
    }
  
  }