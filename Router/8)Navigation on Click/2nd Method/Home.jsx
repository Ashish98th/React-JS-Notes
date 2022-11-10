import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

function Home() {

  const navigate=useNavigate();
 
 function navigateTo(url){
  navigate(url)
 }

  return (
    <div>
    <h1>You are in Home Page</h1>
    <p>We are learning about React Router </p>

    <Link to="./about" >Go to About Page</Link>
    <br/>

    <button onClick={()=>navigateTo('./about')} >Go to About Page</button>


    <br/>
    <button onClick={()=>navigateTo('./contact')} >Go to Contact Page</button>
    </div>
  
  )
}

export default Home;