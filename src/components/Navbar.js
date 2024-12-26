import { Box, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Box>
        <Stack>
        <Link to="/">
            <img src={Logo} alt="logo" style={{height:'48px',width:'48px',margin:'0 20px'}} />
        </Link>
        <Stack>
            <Link to="/">Home</Link>
        </Stack>
        </Stack>
    </Box>
  )
}

export default Navbar