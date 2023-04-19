import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className='form'>
        <ul>
            <Link to='/'>
              <li>Login</li>
            </Link>
            <Link to='/pokemon'>
              <li>Pokédex</li>
            </Link>
        </ul>
    </nav>
  )
}

export default NavBar