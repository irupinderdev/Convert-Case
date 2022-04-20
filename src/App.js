import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Wordcounter from './components/Wordcounter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


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
<Router>
  <Navbar title="Text Utility Tool"/>
  <Routes>
  
  <Route path="/" element={<Textform heading="Enter the text to analyze"/>} />
  <Route exact path='/about' element={<About/> } />
  <Route exact path='/wordcounter' element={ <Wordcounter wcheading="Paste Your Text And Get Text Summary"/> } />
  </Routes>
     
    </Router>
</>
  )
}

export default App;
