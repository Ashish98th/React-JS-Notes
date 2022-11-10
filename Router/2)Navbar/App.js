import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import './App.css';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';

const App=()=>{
  return(
    <div className='App'>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;