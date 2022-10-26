
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';




function App() {
  let inputRef=useRef(null)
  function handleInput(){
    console.log("Function called");
    inputRef.current.value=1000;  //adding value to the input
    inputRef.current.style.color="red";  //color of input changed to red
    inputRef.current.focus();   //focus on input box
    // inputRef.current.style.display="none"; //input will be hide
    //current refeers to the current state
  }
  return (
    
  <div className='App'>
    <h1>useRef</h1> 
  <input type="text" ref={inputRef} />
  <button onClick={handleInput} >Handle Input</button>
</div>

  );
}

export default App;
