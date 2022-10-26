import { useRef } from 'react';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let firstName=useRef(null)  
  let lastName=useRef(null)  
function submitform(e){
  e.preventDefault();    //prevents reloading
  console.log(firstName.current.value + "Firstname set");
  console.log(lastName.current.value + "Lastname set");
  let thirdvalue=document.getElementById('third').value;
  console.log(thirdvalue  +"thirdvalue is set") ;
}

    return (
    
      <div className='App'>
        <h1>UnControlled Component </h1>
    <form onSubmit={submitform}>
    <input type="text" ref={firstName} /> <br/> <br/>
    <input type="text" /> <br/> <br/>
    <input type="text" id='third' /> <br/> <br/>
    <button type="submit"ref={lastName} >Submit</button>

    </form>
        
    </div>
    
      );
}

export default App;
