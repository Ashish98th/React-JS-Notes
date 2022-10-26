import './style.css'
function App() {
  const firstName='John';
  return (
    
    <h1 className="red">{firstName}</h1>
    
    
  );
}

export default App;


// Rendering a varaibale inside JSX



import './style.css'
function App() {
  const firstName='John';
  return (
    
    <h1 className="red">{1+1}</h1>
    
    
  );
}

export default App;


import './style.css'
function App() {
  const firstName='John';
  return (
    
    <h1 className="red">{firstName + firstName}</h1>
    
    
  );
}

export default App;



import './style.css'
function App() {
  const firstName='John';
  return (
    // It will treat + as text
    <h1 className="red">{firstName} + {firstName}</h1> 
    
    
  );
}

export default App;


// Returning a function 

import './style.css'
function App() {
  const firstName='John';
 
  const returnName=()=>{
    return firstName;
  }

  return (
    
    <h1 className="red">{returnName()}</h1>
    
    
  );
}

export default App;

