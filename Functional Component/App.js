import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <h1>Hello World !</h1>
      <User/>
    </div>
  );
}



function User(){
  return(
      <h1>User Component</h1>
  )
}
export default User;
