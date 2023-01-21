import React from 'react'
import { Box, Stack, Grid, TextField, Button} from '@mui/material';
import { useForm } from 'react-hook-form';
import { setLocalStorage } from '../../storage/LocalStorage';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE } from '../../contants/RouteConstants';
// import { NotificationManager } from 'react-notifications';

type formData = {
  firstName:string,
  lastName: string,
  email: string,
  password: string,
  phone: number,
  gender: string
}

const Registration = () => {
  const { handleSubmit, register, formState:{ errors }} = useForm<formData>()

  const navigate = useNavigate()
  const onSubmit = handleSubmit((data: formData) =>{
    console.log("data",data)
    submitRegistration(data)
  })

  const submitRegistration = async (data: formData) => {
    console.log("data1253",data)
    const requestOptions = {
      method:'POST',
      headers: {"Content-type": "application/json;charset=UTF-8", 'Accept': 'application/json'},
      body: JSON.stringify(data)
    }
    const url = 'http://127.0.0.1:4000/api/registrations'
    const res = await fetch(url, requestOptions)
    const result = await res.json()
    if(result.status === 400){
      console.log("result",result.status, result.message)
      // NotificationManager.error('result.message')
    }else{
      console.log('login', res, result)
      setLocalStorage('user',result?.token)
      navigate(DASHBOARD_ROUTE)
    }
  }

  return (
    <Box sx={{background:'#0c3545', height:'100vh', position:'relative'}}>
      <Box sx={{width:{sm:'33%'}, marginX:'auto', position:'absolute',left:'50%', top:'50%', transform:'translate(-50%,-50%)'}}>
        <Box sx={{paddingY:'15px', color:'white', fontSize:'4rem'}}>Registration</Box>
        <Box component="form" onSubmit={onSubmit} noValidate sx={{'& div div div':{background:'#224957',borderRadius:'10px', color:'white'}, '& label, label.Mui-focused':{color:'white'}, '& div div .Mui-focused':{border:'white'}}} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField required fullWidth type="text" id="outlined-required-firstName" label="First Name" {...register("firstName", {required: true } )} />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth type="text" id="outlined-required-lastName" label="Last Name" {...register("lastName", {required: true } )} />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth type="text" id="outlined-required-gender" label="gender" {...register("gender", {required: true } )} />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth type="text" id="outlined-required-email" label="email" {...register("email", {required: true } )} />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth type="text" id="outlined-required-phone" label="phone" {...register("phone", {required: true } )} />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth type="password" id="outlined-required-password" label="Password" {...register("password", {required: true } )} />
            </Grid>
          </Grid>
          <Box sx={{marginY:'15px'}}>
            <Button variant="contained" type="submit">Register</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Registration