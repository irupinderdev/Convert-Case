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
  const handleClearClick = ()=>{
    console.log("Clear was clicked" - text);
    let newText = '';
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
  const [text, setText] = useState('');
  // text="new text"; // wrong way
  // setText="new text"; // right way to change the state
  return (
   <>
    <div className="container my-3">
        <h2>{props.heading}</h2>
        <div className="mb-3">
           {/* <label for="mybox" className="form-label">Write Your Text</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" placeholder='Simply enter your text and choose the case you want to convert it to.'></textarea>
        </div>
        <button className="btn btn-dark" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-warning mx-2 my-2" onClick={handleLwClick}>convert to lowercase</button>
        <button className="btn btn-dark my-2" onClick={handleClearClick}>Clear</button>
        
      </div>
      <div className="container my-3 bg-dark text-light py-4">
        <h2>Your Text Summary</h2>   {/* // counting words and characters */}
        <h5 className='text-warning'>{text.split(" ").length} word and {text.length} characters</h5> 
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        </div>
        <div className="container my-4 bg-dark text-light py-4">
        <h2>Preview</h2>
        <p>{text}</p>
        </div>

      
   </>
  )
}
