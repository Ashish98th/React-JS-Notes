
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App() {
const[increment,setIncrment]=useState(1);
const[decrement,setDecrement]=useState();
useEffect(()=>{
   console.log("useEffect is called");
})

 
  return (
    <div className="App">
      <h1>count : {increment}</h1>
      <button onClick={()=>setIncrment(increment+1)}>Increment</button>
    
      
     
    </div>
    
  );


}

export default App;
