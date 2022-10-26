import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
// import User from './User';

function App() {
    let data="Ashish";
  function Apple(){
    data="Changed";
    alert(data);
  }
  return (
    <div className="App">
      <h1>{data}</h1>
    <button onClick={Apple}>Click Me</button>
    </div>
  );
}

export default App;


//alert data changed but rendering the previous value still
//this is why we use State & Props