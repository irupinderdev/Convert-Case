import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App () {
  return (
<>
    <Navbar title="Convert - Case" aboutText="About Us" serviceText="More Tools"/>
    <Textform heading="Enter the text to analyze"/>
    
    {/* About Component */}
    <About/>
</>
  )
}

export default App;
