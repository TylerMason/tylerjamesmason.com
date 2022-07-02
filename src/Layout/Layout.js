import React from 'react'
import {Grid} from '@mui/material'
import Card from '../Card/Card.js'



const Layout = ({data}) => {

  const dataComp = data.map((data) => {
    return ( 
    <Grid item>
      <Card data={data}></Card>
    </Grid>
  )})

  return (
    
    <Grid container justifyContent="center" spacing={3} padding={3}>
      {dataComp}
    </Grid>
  )
}

export default Layout

/*
      
     
      
    
*/