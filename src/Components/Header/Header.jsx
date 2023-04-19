import React from 'react'
import './Header.css'
import { TextField } from '@mui/material'

const Header = () => {
  return (
    <div>
        <h1 id='header'>Reboot Form</h1>
        <TextField  id="outlined-basic" label="Search Pokemon" variant="outlined" />
    </div>
  )
}

export default Header