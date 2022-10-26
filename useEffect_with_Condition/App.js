
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App() {
const[increment,setIncrment]=useState(0);
const[decrement,setDecrement]=useState(100);
useEffect(()=>{
   console.warn("called with only decrement state");
},[decrement])

 
  return (
    <div className="App">
      <h1>increment  : {increment}</h1>
      <h1>decrement : {decrement}</h1>
      <button onClick={()=>setIncrment(increment+1)}>Increment</button>
      <button onClick={()=>setDecrement(decrement-1)}>Decrement</button>
    
      
     
    </div>
    
  );


}

export default App;
