import React, {useState} from 'react' 

export default function Wordcounter(props) {


  const [text, setText] = useState('');
 
// Handle On change console
const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
  }

  return (
   <>
    <div className='container my-3'>
   <h2>{props.wcheading}</h2>
    <div className="col-md-12">               
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10" placeholder='Simply enter your text and choose the case you want to convert it to.'></textarea>
        </div>
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


      
   </>
  )
}