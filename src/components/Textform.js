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

  // Capitalize
  const handleTcClick = ()=>{
  let words = text.split(" ")
   let uppercaseword = ' '
    words.forEach(element => {
       uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    });
    setText(uppercaseword)
}
// Sentence Case
const handleScClick = ()=>{
  console.log("Sentencecase was clicked" + text);
  let newText = text.charAt(0).toUppercase( )+ text.slice(1);
  setText(newText)
}

//  Reverse
const handleReverse = (event) => {
  /* Convert string to array*/
  let strArr = text.split("");
  /* Reverse array*/
  strArr = strArr.reverse();
  /* Convert array to string*/
  let newText = strArr.join("");
  setText(newText);
}
//Convert to 100 letters
function handleSliceClick(event) {
        let newText = text.slice(0, 100);
        setText(newText);
    }
// Remove Speacial Characters
const rmvSpecailCharacters = () => {
  let newText = text.replace(/[^a-zA-Z ]/g, "");
  setText(newText);
}

   // Copy to Clipboard
   const copyIt=(event)=>{
    setText(event.target.value);
    let newtext=navigator.clipboard.writeText(text);
    console.log(newtext);
    alert("text copied successfully");
  
};

// Speak
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  // Download Text

  
  // Clear
  const handleClearClick = ()=>{
    console.log("Clear was clicked" - text);
    let newText = '';
    setText(newText)
  }

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
        <button className="btn btn-dark" onClick={handleUpClick}>UPPERCASE</button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleLwClick}>lowercase</button>
        <button className="btn btn-dark my-2" onClick={handleTcClick}>Capitalize</button>
        <button className="btn btn-dark my-2 mx-2" onClick={handleScClick}>Sentence case</button>
        <button className="btn btn-dark my-2 mx-2" onClick={handleReverse}>Reverse</button> 
        <button className="btn btn-dark mx-2" onClick={handleSliceClick}>Convert to 100 letters</button>       
        <button className="btn btn-warning my-2 mx-2" onClick={rmvSpecailCharacters}>Remove Specail Characters</button> 
        <button className="btn btn-warning my-2 mx-2" onClick={copyIt}>Copy to Clipboard</button> 
        <button className="btn btn-warning my-2" type="submit" onClick={speak}>Speak</button>
        <button className="btn btn-warning my-2 mx-2" onClick={handleClearClick}>Clear</button>
        
      </div>
      <div className="container my-3 bg-dark text-light py-4">
        <h2>Your Text Summary</h2>   {/* // counting words and characters */}
        <h5 className='text-warning'>{text.split(" ").length} word and {text.length} characters</h5> 
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
         <p>{text.split(" ").length-1} - Space Counter </p>
        </div>
        <div className="container my-4 bg-dark text-light py-4">
        <h2>Preview</h2>
        <p>{text}</p>
        </div>

      
   </>
  )
}
