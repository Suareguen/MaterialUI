import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
        <ul>
            <Link to='/'>
              <li>Login</li>
            </Link>
            <Link to='/pokemon'>
              <li>Pokemon</li>
            </Link>
        </ul>
    </nav>
  )
}

export default NavBar