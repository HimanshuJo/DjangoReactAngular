// src/App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/translate/', {
        original_text: originalText,
      });

      setTranslatedText(response.data.translated_text);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div>
      <h1>Language Translation App</h1>
      <div>
        <label>Original Text:</label>
        <textarea
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleTranslate}>Translate</button>
      </div>
      {translatedText && (
        <div>
          <label>Translated Text:</label>
          <div>{translatedText}</div>
        </div>
      )}
    </div>
  );
}

export default App;
