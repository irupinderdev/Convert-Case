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
//   const handleCcClick = ()=>{
//   let words = text.split(" ")
//    let uppercaseword = ''
//     words.forEach(element => {
//     uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
//     });
//     setText(uppercaseword)
// }
  // Capitalize WEll Working code
const handleCcClick = () =>{
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const upper = text.split(' ').map(capitalize).join(' ');
  setText(upper)

}


// Sentence Case 

// This working but not proper e.g after uppercase or capitalized 
const handleScClick = () => {
  const arr = text.split(". ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const newText = arr.join(". ");
  setText(newText);

};


// iNvErSe cAsE
const handleInverseClick = ()=>{
  let newText =''
  for (const letter of text) {
      if (letter === letter.toLowerCase()) {
          newText = newText+(letter.toUpperCase());
      } else {
          newText = newText+(letter.toLowerCase());
      }
  }  setText(newText);
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

 // Function to remove duplicate words from the string
const onRemoveDuplicatesClick = () => {
  let newText = text.split(' ').filter(function(item,i,allItems){
      return i === allItems.indexOf(item);
  }).join(' ');
  setText(newText)
}

// Remove Speacial Characters
const rmvSpecailCharacters = () => {
  let newText = text.replace(/[^a-zA-Z ]/g, "");
  setText(newText);
}

//  Remove Extra spaces - *
const handleExtraSpaces = ()=>{
 let newText = text.replace(/\s+/g, ' ').trim();
  setText(newText)
  }

   // Copy to Clipboard
const copyIt = async () => {
  await navigator.clipboard.writeText(text);
  alert('Text copied');
}



// Pronounce
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  // Download Text
  const download=(filename, text)=>{
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none'; document.body.appendChild(element);
    element.click(); document.body.removeChild(element);
  }
  
  // Clear
  const handleClearClick = ()=>{
    console.log("Clear was clicked" - text);
    let newText = '';
    setText(newText)
  }

  // Light and dark theme 

// Handle On change console
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
        <button className="btn btn-outline-dark" onClick={handleUpClick}>UPPERCASE</button>
        <button className="btn btn-outline-dark" onClick={handleLwClick}>lowercase</button>
        <button className="btn btn-outline-dark " onClick={handleCcClick}>Capitalize</button>
        <button className="btn btn-outline-dark" onClick={handleScClick}>Sentence case</button>
        <button className="btn btn-outline-dark " onClick={handleReverse}>Reverse</button> 
        <button className="btn btn-outline-dark" onClick={handleInverseClick}>iNVERSE</button>         
        <button className="btn btn-outline-dark" onClick={handleSliceClick}>Convert to 100 letters</button>       
        <button className="btn btn-outline-dark" onClick={rmvSpecailCharacters}>Remove Special Characters</button> 
        <button className="btn btn-outline-dark " onClick={handleExtraSpaces }>Remove Extra Spaces</button> 
        <button className="btn btn-outline-dark " onClick={onRemoveDuplicatesClick }> Remove Duplicate Words </button> 
        <button className="btn btn-dark" onClick={copyIt}>Copy to Clipboard</button>         
        <button className="btn btn-dark" onClick={download}>Download txt</button> 
        <button className="btn btn-warning" type="submit" onClick={speak}>Pronounce</button>
        <button className="btn btn-dark " onClick={handleClearClick}><i class="fa-solid fa-trash-can"></i></button>
        
      </div>
      <div className="container my-3 bg-light py-4">
        <h2>Your Text Summary</h2>   {/* // counting words and characters */}
        <table className="rtable"> 
          <tr>
            <td><strong>Words :</strong> {text.split(" ").length} </td>  {/*  {text.split('\n').join('').split(/[ ]+/).length} */}
             <td> <strong>Characters : {text.length} </strong>{}  </td>    {/*  {text.split('\n').join('').split(/[ ]+/).join('').length} */}
             <td> {text.split(" ").length-1} - Space Counter </td>
             <td> Paragraphs: {text.split(/\r\n|\r|\n/).length}</td>
             <td>{0.008 * text.split(" ").length} Minutes to read</td>
             <td>Sentence count: {text.split(/[.?!]\s/).length}</td>
             <td>Characters per word(Average): {text.replace(/ /g,"").length/text.split(" ").length}</td>
          </tr>
        </table>
        </div>
        <div className="container my-4 bg-light py-4">
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in Textarea above to Preview"}</p>
        </div>

      
   </>
  )
}
