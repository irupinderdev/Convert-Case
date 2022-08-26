import React, { useState } from 'react'

export const Textform = (props) => {

  const [text, setText] = useState('');

  // state for copy to clipboard
  const [copied, setCopied] = useState("Copy to Clipboard")

  // UPPERCASE
  const handleUpClick = () => {
    console.log("Upppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  //lowercase
  const handleLwClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  // Capitalize
  // Capitalize WEll Working code
  const handleCcClick = () => {
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
  const handleInverseClick = () => {
    let newText = ''
    for (const letter of text) {
      if (letter === letter.toLowerCase()) {
        newText = newText + (letter.toUpperCase());
      } else {
        newText = newText + (letter.toLowerCase());
      }
    } setText(newText);
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
  // function handleSliceClick(event) {
  //         let newText = text.slice(0, 100);
  //         setText(newText);
  //     }

  // Function to remove duplicate words from the string
  const onRemoveDuplicatesClick = () => {
    let newText = text.split(' ').filter(function (item, i, allItems) {
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
  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText)
  }

  // Copy to Clipboard
  //    const copyIt = async () => {
  //     await navigator.clipboard.writeText(text);
  //     alert('Text copied');
  // }
  const copyIt = async () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied("Copied Succesfully");
      // change back to initial state after 1 second
      setTimeout(() => {
        setCopied("Copy to Clipboard");
      }, 1500);
    }, (err) => {
      console.log(`Failed to Copy {err.message}`)
    }
    )
  }


  // Pronounce
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  // Download Text
  // const download=(filename, text)=>{
  //   var element = document.createElement('a');
  //   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  //   element.setAttribute('download', filename);
  //   element.style.display = 'none'; document.body.appendChild(element);
  //   element.click(); document.body.removeChild(element);
  // }

  // Clear
  const handleClearClick = () => {
    console.log("Clear was clicked" - text);
    let newText = '';
    setText(newText)
  }

  // Light and dark theme 

  // Handle On change console
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }
  return (
    <>
      <div className='container section-1'>
        <div className='row'>
          <h2 className='text-center pb-4 font-weight-bold'>{props.heading}</h2>
          <div className="col-md-12">
            {/* <label for="mybox" className="form-label">Write Your Text</label> */}
            <div className="col-md-12">    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" placeholder='Simply enter your text and choose the case you want to convert it to.'></textarea>
            </div>
            <div className='buttons-container'>
            <button className="btn" onClick={handleUpClick}>UPPERCASE</button>
            <button className="btn" onClick={handleLwClick}>lowercase</button>
            <button className="btn" onClick={handleCcClick}>Capitalize</button>
            <button className="btn" onClick={handleScClick}>Sentence case</button>
            <button className="btn" onClick={handleReverse}>Reverse</button>
            <button className="btn" onClick={handleInverseClick}>iNVERSE</button>
            {/* <button className="btn" onClick={handleSliceClick}>Convert to 100 letters</button>        */}
            <button className="btn" onClick={rmvSpecailCharacters}>Remove Special Characters</button>
            <button className="btn" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn" onClick={onRemoveDuplicatesClick}> Remove Duplicate Words </button>
            <button className="btn" type="submit" onClick={speak}>Pronounce</button>
            <button className="btn btn-dark" onClick={copyIt}>{copied}</button>
            {/* <button className="btn btn-dark" onClick={download}>Download txt</button>  */}

            <button className="btn" onClick={handleClearClick}><i class="fa-solid fa-trash-can"></i></button>
            </div>
          </div>
          <div className='my-3 text-center'>
            Words : <strong> {text.split(" ").filter((element) => { return element.length !== 0 }).length} </strong> |&nbsp; Characters :    <strong>{text.length}{ }  </strong> | &nbsp; Space Counter -  <strong>{text.split(" ").length - 1} </strong> | &nbsp;Sentences:  <strong>{text.split(/[.?!]\s/).filter((element) => { return element.length !== 0 }).length}  </strong> | &nbsp;Paragraphs:  <strong>{text.split(/\r\n|\r|\n/).filter((element) => { return element.length !== 0 }).length} </strong> |  &nbsp; Time to Read: <strong> {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} </strong> | &nbsp; Characters per word(Average):  <strong>{text.replace(/ /g, "").length / text.split(" ").length}</strong>
          </div>


          {/* <div className="col-md-6">
         <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10" readOnly></textarea>
        </div> */}

        </div>
      </div>

      <div className='container section-1'>
        <h2 className='text-center'>Preview</h2>
        <div id="preview">
          <p>{text.length > 0 ? text : "Enter Something in Textarea above to Preview"}</p>

        </div>
      </div>



    </>
  )
}
