
import logo from './logo.svg';
import './App.css';
import Student from './Student';


function App() {
  return (
    <div className="App">
      <h1> App data</h1>
     <Student other={{address:'Assam',mobile:"9957176546" }} /> 
       <Student other={{address:'Maharashtra',mobile:"9957176878" }} />
     <Student other={{address:'Uttra Pradesh',mobile:"9957178946" }} /> 
       
    
    </div>
  );
}

export default App;


//Multiple data rendering 