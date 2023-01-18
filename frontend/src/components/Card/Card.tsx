import React from 'react';
import { Paper } from '@mui/material';

type cardDetail = {
  height: string,
  width: string,
  detail: string
}

const CustomCard: React.FC = (props: any) => {
  return (
    <Paper elevation={4} sx={{margin:'10px', background:'white',height:'200px'}}>
      Hello
    </Paper>
    
  )
}

export default CustomCard