import {useState} from 'react'  //to define state we have to import react
//useState is a Hook which allows us to maintain State,to update the state
import logo from './logo.svg';
import './App.css';
// import User from './User';

function App() {
  const[data,setData]=useState(0);
  function updateData(){
    setData(data+1) //previous state +1
  }
  return (
    <div className="App">
      <h1>{data}</h1>
    <button onClick={updateData}>Click Me</button>
    </div>
  );
}

export default App;


//increase the variable count