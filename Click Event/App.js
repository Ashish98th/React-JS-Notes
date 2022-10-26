import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
// import User from './User';

function App() {
  function Apple(){
    alert("function called");
  }
  return (
    <div className="App">
      <h1>Hello World !</h1>
    <button onClick={Apple}>Click Me</button>
    {/* //here Apple function gets called  */}
    </div>
  );
}

export default App;
