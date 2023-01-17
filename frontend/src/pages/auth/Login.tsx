import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { REGISTRATION } from '../../contants/RouteConstants'

const Login = () => {
  return (
    <Box sx={{background:'#0C3545', height:'100vh'}}>
      <Box sx={{width:{xs:'100%', sm:'30%'}, marginX:'auto'}}>
      <Box sx={{paddingY:'15px'}}>Login</Box>
        <form noValidate style={{padding:'15px'}}>
          <Grid container spacing={2} sx={{'& div div':{color:'white', background:'#224957', borderRadius:'10px'}, '& label,label.Mui-focused, fieldset':{color:'white', borderColor:'none'} }}>
            <Grid item xs={12}>
              <TextField required fullWidth type="email" id="outlined-required" label="Email" />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth type="password" id="outlined-required" label="Password" />
            </Grid>
          </Grid>
          <Box sx={{marginY:'15px'}}>
            <Button variant="contained" type="submit">Log In</Button>
          </Box>
        </form>
        <Link to={REGISTRATION} >Registration</Link>
      </Box>
    </Box>
  )
}

export default Login
