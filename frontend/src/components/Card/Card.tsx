import React from 'react';
import { Paper, Box , Divider} from '@mui/material';

type cardDetail = {
  details: string,
  languageType: string,
  name: string,
  title: string,
  __v: number,
  _id: string

}

const CustomCard = (props: { item: cardDetail; }) => {
  const {item} = props;
  return (
    <Paper elevation={4} sx={{margin:'10px', background:'white',height:'200px'}}>
      <Box sx={{paddingY:'5px'}}>
        <Box sx={{fontSize:'35px'}}>{item?.name}</Box>
        <Divider />
        <Box sx={{paddingTop:'5px', fontSize:'24px'}}>{item?.title}</Box>
      </Box>
    </Paper>
  )
}

export default CustomCard