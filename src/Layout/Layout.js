import React from 'react'
import {Grid} from '@mui/material'
import Card from '../Card/Card.js'

const data = {
  cardOne: {
    name: 'cardOne',
    url: 'link here',
    number: 1
  },
  cardTwo: {
    name: 'cardOne',
    url: 'link here',
    number: 1
  },
  cardThree: {
    name: 'cardOne',
    url: 'link here',
    number: 1
  },
  cardFour: {
    name: 'cardOne',
    url: 'link here',
    number: 1
  }
}

const Layout = () => {
  return (
    <Grid container justifyContent="center" spacing={3} padding={3}>
        <Grid item>
          <Card></Card>
        </Grid>
        <Grid item>
          <Card></Card>
        </Grid>
        <Grid item>
          <Card></Card>
        </Grid>
        <Grid item>
          <Card></Card>
        </Grid>
    </Grid>
  )
}

export default Layout