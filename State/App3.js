import {useState} from 'react'  //to define state we have to import react
//useState is a Hook which allows us to maintain State,to update the state
import logo from './logo.svg';
import './App.css';
// import User from './User';

function App() {
  const[data,setData]=useState(0);
  function updateData(){
    setData("Ashish");
  }
  return (
    <div className="App">
      <h1>{data}</h1>
    <button onClick={updateData}>Click Me</button>
    </div>
  );
}

export default App;


//So inside component if You want to change data or want to use data You have to use State instead of variable