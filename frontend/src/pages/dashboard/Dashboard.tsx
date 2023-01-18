import { AddCircle } from '@mui/icons-material'
import { Box , Grid, Paper} from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomCard from '../../components/Card/Card'
import Headers from '../../components/Headers/Headers'

const Dashboard:React.FC = () => {
  const navigate = useNavigate()
  const details =  [
    {height:'200px', width:'300px', details: 'Green Card'},
    {height:'200px', width:'300px', details: 'red Card'},
    {height:'200px', width:'300px', details: 'red Card'},
    // {height:'200px', width:'300px', details: 'red Card'}
  ]

  const addLanguage = async () => {
    navigate("/")
  }
  return (
    <Box sx={{background:'#EAEAEA', minHeight:'100vh'}}>
      <Headers />
      <Box sx={{}}>
        Dashboard
      </Box>
      <Box>
        
      <Grid container spacing={2}>
        {
          details.map((item: any, index) => 
          <Grid item xs={12} sm={4}>
            <CustomCard  />
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