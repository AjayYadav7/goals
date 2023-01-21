import { AddCircle } from '@mui/icons-material'
import { Box , Grid, Paper} from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CustomCard from '../../components/Card/Card'
import Headers from '../../components/Headers/Headers'
import { ADD_LANGUAGE_ROUTE } from '../../contants/RouteConstants';
import { getLocalStorage } from '../../storage/LocalStorage';

const Dashboard:React.FC = () => {
  const [languageData, setLanguageData] = useState<any>(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchLanguage()
  },[])

  const details =  [
    {height:'200px', width:'300px', details: 'Green Card'},
    {height:'200px', width:'300px', details: 'red Card'},
    {height:'200px', width:'300px', details: 'red Card'},
    // {height:'200px', width:'300px', details: 'red Card'}
  ]

  const fetchLanguage = async () => {
    const requestOptions: any = {
      method:'GET',
      headers: {"Content-type": "application/json;charset=UTF-8", 'Accept': 'application/json', 'bearer_token':getLocalStorage('user') },
    }
    const url = 'http://127.0.0.1:4000/api/languages'
    const res = await fetch(url, requestOptions)
    const result = await res.json();
    setLanguageData(result)
  }  
  console.log("languageData",languageData)


  const addLanguage = async () => {
    navigate(ADD_LANGUAGE_ROUTE)
  }

  const handleLanguage = () => {

  }

  return (
    <Box sx={{background:'#EAEAEA', minHeight:'100vh'}}>
      <Headers />
      <Box sx={{fontSize:'35px', paddingY:'12px'}}>
        Dashboard
      </Box>
      <Box>
        
      <Grid container spacing={1}>
        {
          languageData &&
          languageData.map((item: any, index: any) => 
          <Grid item xs={12} sm={4} key={`c_${index}`} onClick={()=>handleLanguage()} sx={{cursor:'pointer', '& >:hover':{background:'#FFFAFA	', transform: 'scale(1.04)'}}}>
            <CustomCard item={item} />
          </Grid>
          )
        }
        <Grid item xs={12} sm={4} sx={{position:'relative'}}>
          <Paper elevation={4} sx={{margin:'10px', height:'200px'}}>
            <Box sx={{position: 'absolute', left:'50%', top:'50%', transform: 'translate(-50%, -50%)'}}>
              <AddCircle sx={{fontSize:'5rem', color:'#DDE', '& :hover':{ color:'green', cursor:'pointer'} }} onClick={()=>addLanguage()}  />
              <Box>
                Add Languages
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      </Box>
    </Box>
  )
}

export default Dashboard