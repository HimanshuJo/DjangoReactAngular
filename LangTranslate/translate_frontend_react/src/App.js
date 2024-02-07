import React, {useState} from 'react';
import axios from 'axios';

function App(){
  const [originalText, setOriginalText]=useState('');
  const [translatedText, setTranslatedText]=useState('');

  const handleTranslate=async()=>{
    try{
      const response=await axios.post('http://127.0.0.1:8000/api/translate/', {
        originalText: originalText, 
      });
      setTranslatedText(response.data.translated_text);
    } catch(error){
      console.error('Error translating text: ', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Language Translation App</h1>
      <div className="form-group">
        <label htmlFor="originalText">Original Text:</label>
        <textarea
          className="form-control"
          id="originalText"
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <button
          className="btn btn-primary"
          onClick={handleTranslate}
        >
          Translate
        </button>
      </div>
      {translatedText && (
        <div className="mt-4">
          <label>Translated Text:</label>
          <div className="alert alert-success" role="alert">
            {translatedText}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;