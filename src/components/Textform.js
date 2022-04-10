import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("Upppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLwClick = ()=>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  // const handleScClick = ()=>{
  //   console.log("Sentencecase was clicked" + text);
  //   let newText = text.toLowerCase();
  //   setText(newText)
  // }
  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  // text="new text"; // wrong way
  // setText="new text"; // right way to change the state
  return (
   <>
    <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
           {/* <label for="mybox" className="form-label">Write Your Text</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" placeholder='Simply enter your text and choose the case you want to convert it to.'></textarea>
        </div>
        <button className="btn btn-dark" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-warning mx-2 my-2" onClick={handleLwClick}>convert to lowercase</button>
        {/* <button className="btn btn-dark my-2" onClick={handleCcClick}>convert to Sentence Case</button> */}
        
      </div>
   </>
  )
}
