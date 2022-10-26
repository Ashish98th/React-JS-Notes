import React,{ useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Student from './Student';


function App() {

  const[status,setStatus]=useState(true)
  return (
    <div className="App">
      {
        status? <h1>if true then show this</h1>:null
      }
      <h1> App data</h1>
      
    <button onClick={()=>setStatus(false)}>Hide</button> 
    
    
    </div>
  );
}

export default App;


// Hide the element 
 