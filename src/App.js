import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App () {
  // const[darkMode, setDarkMode] = useState(false); // Whether Dark Mode is enabled or not
  return (
<>
    <Navbar title="Text Utility Tool" aboutText="Word Counter" serviceText="More Tools" replace="Replace" beautify="Beautify" password="Password Generator"/>
   
     <Textform heading="Enter the text to analyze"/>
    
    {/* About Component */}
    <About/>
</>
  )
}

export default App;
