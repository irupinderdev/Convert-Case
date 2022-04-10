import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App () {
  return (
<>
    <Navbar title="TextUtils" aboutText="About Us" serviceText="Services"/>
    <Textform heading="Enter the text to analyze"/>
</>
  )
}

export default App;
