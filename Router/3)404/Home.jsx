import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
    <p>You are in Home Page</p>
    <p>We are learning about React Router </p>
    <Link to="./about" >Go to About Page</Link>
    </div>
  
  )
}

export default Home;