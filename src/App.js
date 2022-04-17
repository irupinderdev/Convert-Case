import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import React, { useState } from 'react'

function App () {
  //  const [mode, setMode] = useState('light'); // Whether Dark Mode is enabled or not

  //       const toggleMode = () => {
  //         if (mode === 'light') {
  //             setMode('dark');
  //         }
  //         else {
  //             setMode('light');
  //         }
   //   };

  return (
<>
    <Navbar title="Text Utility Tool" aboutText="Word Counter" serviceText="More Tools" replace="Replace" beautify="Beautify" password="Password Generator"/>
   
     <Textform heading="Enter the text to analyze"/>
    
    {/* About Component */}
    {/* <About/> */}
</>
  )
}

export default App;
