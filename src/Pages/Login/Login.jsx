import React, { useState } from 'react'
import './Login.css'
import { grey } from '@mui/material/colors'
import { Email, Lock, VisibilityOff, Visibility } from '@mui/icons-material'
import { Card, CardContent, CardHeader, TextField, CardActions, Button, IconButton, Divider } from '@mui/material'
import { Link } from 'react-router-dom'


export const LoginForm = () => {
  const [isPassVisible, setIsPassVisible] = useState(false)
  const changeVisibility = () => {
    setIsPassVisible(!isPassVisible)
  }

  return (
    <Card 
    sx={{ color: '#f5f6f7' ,backgroundColor: grey[500], width: '850px', height:'300px', borderRadius: 8,  }}
    raised={true}
    >
      <CardHeader title='Login'/>
      <CardContent 
        sx={{width:'800px'}}>
        <TextField
        sx={{ width: '650px' }}
        label='Email'
        placeholder='Introduce your Email'
        InputProps={{
          endAdornment: (
            <Email />
          )
        }}
        ></TextField>
        <TextField
        sx={{ width: '650px'}}
        label='Password'
        variant='outlined'
        margin='dense'
        fullWidth={true}
        type={ isPassVisible ? 'text' : 'password' }
        InputProps={{
          startAdornment: <Lock />,
          endAdornment: (
          <IconButton
          onClick={changeVisibility}
          >
            {isPassVisible ? <Visibility/> : <VisibilityOff />}
          </IconButton>
          )
        }}
        ></TextField>
      </CardContent>
      <Divider/>
      <CardActions
      sx={{ display: 'flex', flexDirection:'row', justifyContent:'center', margin: '15px' }}
      >
        <Link to='/pokemon'>
            <Button
            size='small'
            color='secondary'
            variant='contained'
            >Register
            </Button>
        </Link>
        <Link to='/pokemon'>
            <Button
            size='small'
            color='primary'
            variant='contained'
            >Login
            </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default LoginForm