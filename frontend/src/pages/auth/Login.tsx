import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link , useNavigate} from 'react-router-dom'
import {  DASHBOARD_ROUTE, REGISTRATION_ROUTE } from '../../contants/RouteConstants'
import { setLocalStorage } from '../../storage/LocalStorage'

type formValues = {
  email: string,
  password: string
}

const Login = () => {
  const { handleSubmit, register , formState:{ errors }} = useForm<formValues>();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data: formValues ) => {
    console.log("login data",data)
    loginApi(data)
  })

  const loginApi= async (data: formValues) => {
    const requestOptions = {
      method:'POST',
      headers: {"Content-type": "application/json;charset=UTF-8", 'Accept': 'application/json'},
      body: JSON.stringify(data)
    }
    const url = 'http://127.0.0.1:4000/api/auth'
    const res = await fetch(url, requestOptions)
    const result = await res.json()
    console.log('login', res, result)
    setLocalStorage('user',result?.token)
    navigate(DASHBOARD_ROUTE)
  }

  return (
    <Box sx={{background:'#0C3545', height:'100vh'}}>
      <Box sx={{width:{xs:'100%', sm:'30%'}, marginX:'auto'}}>
      <Box sx={{paddingY:'15px'}}>Login</Box>
        <form noValidate  onSubmit={onSubmit} style={{padding:'15px'}}>
          <Grid container spacing={2} sx={{'& div div':{color:'white', background:'#224957', borderRadius:'10px'}, '& label,label.Mui-focused, fieldset':{color:'white', borderColor:'none'} }}>
            <Grid item xs={12}>
              <TextField required fullWidth type="email" id="outlined-required-email" label="Email" {...register("email", {required: true } )} />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth type="password" id="outlined-required-password" label="Password" {...register("password", {required: true } )} />
            </Grid>
          </Grid>
          <Box sx={{marginY:'15px'}}>
            <Button variant="contained" type="submit">Log In</Button>
          </Box>
        </form>
        <Link to={REGISTRATION_ROUTE} >Registration</Link>
      </Box>
    </Box>
  )
}

export default Login
