import React from 'react';
import { analyzeImage } from './azure-image-analysis';
import { useState } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState("");
  // Create a component that displays the text "Computer vision" in a <h1> tag
  function setImage(e) {
    setImageUrl(e);
  }

  function validateImage() {
    analyzeImage(imageUrl).then(data => {
      console.log(data);
      setResult(  data);
    });
  }

  return (
    <div>
      <h1>Computer Vision</h1>
      <br></br>
      <b>Insert URL or type prompt</b>
      <br></br>
      <input type="text" placeholder="Enter url to analize or textual prompt to generate an image" value={imageUrl} onChange={e => setImage(e.target.value)}></input>
      <br></br>
      <button onClick={validateImage}>Analize</button>
      <button>Generate</button>
      <br></br>
      <img src={imageUrl} alt="prompted image" width="500" height="600"></img>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default App;
