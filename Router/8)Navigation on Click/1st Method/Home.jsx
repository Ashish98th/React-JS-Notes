import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

function Home() {

  const navigate=useNavigate();
  console.log(navigate)
  return (
    <div>
    <p>You are in Home Page</p>
    <p>We are learning about React Router </p>

    <Link to="./about" >Go to About Page</Link>
    <br/>

    <button onClick={()=>navigate("/about")} >Go to About Page</button>

    {/* <button onClick={()=>navigate(path)} >Go to About Page</button>  */}
    <br/>
    <button onClick={()=>navigate('/contact')} >Go to Contact Page</button>
    </div>
  
  )
}

export default Home;