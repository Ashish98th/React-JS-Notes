import React from 'react';
import About from './About';
import Contact from './Contact';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

const App=()=>{
  return(
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;