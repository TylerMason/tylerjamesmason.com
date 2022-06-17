import React from 'react'
import {Grid} from '@mui/material'
import Card from '../Card/Card.js'

const Layout = () => {
  return (
    <Grid container spacing={3}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </Grid>
  )
}

export default Layout