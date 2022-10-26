import React,{ useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Student from './Student';


function App() {

  const[name,setName] = useState("");
  const[tnc,setTnc] = useState(false);
  const[interest,setInteres]=useState("");

  function getFormData(e){   //e<==e is event
    e.preventDefault()     //preventDefault is a function to prevent the submission of form
  }

  return (
    <div className="App">
      <h1>Handle Form</h1>
      <form onSubmit={getFormData}>  
      {/* event is basically to prevent the page refresh when it was called because we need to create single page application */}
        <input type="text" placeholder="enter Your name..." onChange={(e)=>setName(e.target.value)} /> 
      <br/> 
      <br/>
      <select>
        <option>Select Options</option>
        <option>Marvel</option>
        <option>DC</option>
      </select>
      <br/> 
      <br/>

      <input type="checkbox"/> <span>Accept Terrms & conditions</span>
      <br/>
      <br/>

      <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default App;
