
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    
  const[val,setValue]=useState("");

    return (
    
      <div className='App'>
        <h1>Controlled Component </h1>
        <input type="text" value={val} onChange={(e)=>setValue(e.target.value)} ></input> //property of value is val here
        
    </div>
    
      );
}

export default App;
