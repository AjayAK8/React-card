import React from 'react'
import { FaHome } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';

const Nav = () => {
  return (
    
    <header>
        <nav>
          <div  className="title"> 
            <h2><FaHome/>House Rent</h2>
                <div>
                    <ul >
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
          </div> 
        </nav>
    </header>
        
    
    
  )
}

export default Nav
