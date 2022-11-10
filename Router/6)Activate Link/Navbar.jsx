import React from 'react'
import {Link,NavLink} from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <ul className='navbar'>
        
        <li><NavLink className="nav-bar-link" style={{backgroundColor:"aqua"}} to="/">Home</NavLink></li>
        <li><NavLink  className="nav-bar-link" to="/contact">Contact</NavLink></li>
        <li><NavLink  className="nav-bar-link" to="/about" >About</NavLink></li>
    

        
      </ul>
    </div>
  )
}

export default Navbar;