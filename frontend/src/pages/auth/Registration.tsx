import React from 'react'
import { Box, Stack, Grid, TextField, Button} from '@mui/material';
import { useForm } from 'react-hook-form';

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

  const onSubmit = handleSubmit((data: formData) =>{
    console.log("data",data)
  })

  return (
    <Box sx={{background:'#0c3545', height:'100vh'}}>
      <Box sx={{width:{sm:'90%'}, marginX:'auto'}}>
        <Box sx={{paddingY:'15px', color:'white'}}>Registration</Box>
        <Box component="form" onSubmit={onSubmit} noValidate sx={{'& div div div':{background:'#224957',borderRadius:'10px', color:'white'}, '& label, label.Mui-focused':{color:'white'}, '& div div .Mui-focused':{border:'white'}}} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth type="text" id="outlined-required-firstName" label="First Name" {...register("firstName", {required: true } )} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth type="text" id="outlined-required-lastName" label="Last Name" {...register("lastName", {required: true } )} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth type="text" id="outlined-required-gender" label="gender" {...register("gender", {required: true } )} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth type="text" id="outlined-required-email" label="email" {...register("email", {required: true } )} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth type="text" id="outlined-required-phone" label="phone" {...register("phone", {required: true } )} />
            </Grid>
            <Grid item xs={12} sm={6}>
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