import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Page404 from './Page404';
import './App.css';
import { BrowserRouter,Route,Routes,Link, Navigate } from 'react-router-dom';

const App=()=>{
  return(
    <div className='App'>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<Navigate to ="/"/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;