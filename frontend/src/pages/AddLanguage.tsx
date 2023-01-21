import { Box, TextField, Grid, Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import Headers from '../components/Headers/Headers'
import { DASHBOARD_ROUTE } from '../contants/RouteConstants';
import { getLocalStorage } from '../storage/LocalStorage';

type formValues = {
  name: string,
  title: string,
  details: string,
  languageType: string
}

const AddLanguage = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState:{ errors }} = useForm<formValues>()

  const onSubmit = handleSubmit((data: formValues ) => {
    console.log("login data",data)
    addLanguages(data)
  })

  const addLanguages = async (data:formValues) => {
    const requestOptions: any = {
      method:'POST',
      headers: {"Content-type": "application/json;charset=UTF-8", 'Accept': 'application/json', 'bearer_token':getLocalStorage('user')},
      body: JSON.stringify(data)
    }
    const url = 'http://127.0.0.1:4000/api/languages'
    const res = await fetch(url, requestOptions)
    const result = await res.json()
    if(result.status === 200){
      navigate(DASHBOARD_ROUTE)
    }else{
      console.log("error while submitting language")
    }
  }


  return (
    <Box sx={{background:'#EAEAEA', minHeight:'100vh'}}>
      <Headers />
      <Box sx={{fontSize:'24px', paddingY:'15px'}}>
        Add language
      </Box>
      <Box sx={{padding:'15px'}}>
        <form noValidate  onSubmit={onSubmit} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField required fullWidth type="text" id="outlined-required-email" label="Name" {...register("name", {required: true } )} />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth type="text" id="outlined-required-email" label="Title" {...register("title", {required: true } )} />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth type="text" id="outlined-required-email" label="Details" {...register("details", {required: true } )} />
            </Grid>
            <Grid item xs={12}> 
              <TextField required fullWidth type="text" id="outlined-required-email" label="Language Type" {...register("languageType", {required: true } )} />
            </Grid>
          </Grid>
          <Box sx={{marginY:'15px'}}>
            <Button variant="contained" type="submit">Submit</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default AddLanguage