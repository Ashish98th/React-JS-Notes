import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {/* <li><a href='/' >Home</a></li>
        <li><a href='/contact' >Contact</a></li> */}
      </ol>
    </div>
  )
}

export default Navbar