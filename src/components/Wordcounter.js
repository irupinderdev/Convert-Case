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
    <div className='container section-1'>
   <h2>{props.wcheading}</h2>
    <div className="col-md-12">               
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="7" placeholder='Simply enter your text and choose the case you want to convert it to.'></textarea>
        </div>
        </div>
      <div className="container my-3 section-1 py-4">
        <h2>Your Text Summary</h2>   {/* // counting words and characters */}
        <table className="rtable"> 
          <tr>
          <td> Words: {text.split(" ").filter((element)=>{return element.length!==0}).length} </td>  {/*  {text.split('\n').join('').split(/[ ]+/).length} */}
             <td> Characters : {text.length} {}  </td>    {/*  {text.split('\n').join('').split(/[ ]+/).join('').length} */}
             <td> Space Counter: {text.split(" ").length-1} </td>
             <td> Paragraphs: {text.split(/\r\n|\r|\n/).filter((element) => {return element.length!==0}).length}</td>
             <td> Time to Read: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} </td>
             <td>Sentence count: {text.split(/[.?!]\s/).filter((element)=>{return element.length!==0}).length}</td>
             <td>Characters per word(Average): {text.replace(/ /g,"").length/text.split(" ").length}</td>
          </tr>
        </table>
        </div>


      
   </>
  )
}
