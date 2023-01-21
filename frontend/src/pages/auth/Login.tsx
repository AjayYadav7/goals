import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link , useNavigate} from 'react-router-dom'
import {  DASHBOARD_ROUTE, REGISTRATION_ROUTE } from '../../contants/RouteConstants'
import { setLocalStorage } from '../../storage/LocalStorage'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


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
    console.log("result",result)
    if(result.status === 200){
      console.log('login', res, result)
      setLocalStorage('user',result?.token)
      navigate(DASHBOARD_ROUTE)
    }else{
      toast(<p>{result.message}</p>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        type: "error",
        toastId:'login-error-toast'
      });
      console.log("error", result)
    }
  }

  return (
    <Box sx={{background:'#0C3545', height:'100vh', position: 'relative'}}>
      <Box sx={{width:{xs:'100%', sm:'33%'}, color:'white', marginX:'auto', position:'absolute', left:'50%', top:'50%', transform:'translate(-50%, -50%)'}}>
        <Box sx={{paddingY:'15px'}}>Sign In</Box>
        <Box sx={{}}>Sign in and start managing your candidates!</Box>
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
            <Button variant="contained" type="submit" sx={{background:'#20D7F7', width:'100%'}}>Log In</Button>
          </Box>
        </form>
        <Link to={REGISTRATION_ROUTE} >Registration</Link>
      </Box>
      <ToastContainer />
    </Box>
  )
}

export default Login
