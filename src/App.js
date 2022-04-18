import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Wordcounter from './components/Wordcounter';


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
//    const [alert, setAlert] = useState(null)
//    const showAlert = (message, type) => {
//     setAlert({
//         msg: message,
//         Type: type
//     })
// }

  return (
<>
    <Navbar title="Text Utility Tool" aboutText="Word Counter" serviceText="More Tools" replace="Replace" beautify="Beautify" password="Password Generator"/>
     <Textform heading="Enter the text to analyze"/>
    {/* About Component */}
    {/* <About/> */}
    <Wordcounter wcheading="Paste Your Text And Get Text Summary"/>
</>
  )
}

export default App;
