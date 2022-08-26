import './App.css';

import {Navbar} from './components/navbar';
import {Textform} from './components/textarea';
import {Wordcounter} from './components/wordcounter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from './components/footer';


export const App =()=> {

  return (
<>
<Router>
        <Navbar title="Online Converter Tool" />
        <div className='main-container'>
  <Routes>
  <Route path="/" element={<Textform heading="Enter the text to analyze"/>} />
  <Route exact path='/' element={ <Wordcounter wcheading="Paste Text And Get Text Summary"/> } />
          </Routes>
          

        </div>
        <Footer/>
    </Router>
</>
  )
}

