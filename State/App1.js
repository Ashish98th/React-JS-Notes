import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
// import User from './User';

function App() {
    let data="Ashish";
  function upDate(){
    data="Ash";  //trying to change the data
    alert(data);  //data changed in alert
  }
  return (
    <div className="App">
      <h1>{data}</h1>  //data doesn't changed here
    <button onClick={upDate}>Click Me</button>
    </div>
  );
}

export default App;

//we can't update data from variable that's why we use State
