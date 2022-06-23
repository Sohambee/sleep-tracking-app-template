import { Box, Button, Divider, FormLabel, getTypographyUtilityClass, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles({
  container: {
    height: '100%',
    margin: '30px',
    boxShadow: '0px 0px 25px 2px rgba(0, 0, 0, 0.3)',
    borderRadius: '14px',
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '20px',
  },
  leftNav: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  navButton: {
    marginLeft: '20px !important',
  },
  rightNav: {
    justifyContent: 'flex-end',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

export default function Home() {
  const classes = useStyles();

  return (
    <Box sx={{ height: '100%' }}>
      <Box className={classes.container}>
        <Box className={classes.navbar}>
          <Box className={classes.leftNav}>
            <Typography variant='h5' sx={{ fontWeight: 300 }}>
              SleepTracking
            </Typography>
          </Box>
          <Box className={classes.rightNav}>
            <Button variant='contained' href='/'>Log Out</Button>
          </Box>
        </Box>
        <Divider />
        <Box className={classes.content}>
          <Box>
            <form autoComplete="off">
              <Typography variant='h6' sx={{ fontWeight: 300, marginBottom: '30px' }}>
                Select a date and input the hours you slept!
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '20px' }}>
                <TextField
                  id="date"
                  label="Select Date"
                  variant='standard'
                  InputLabelProps={{ shrink: true, required: true }}
                  type="date"
                />
                <TextField
                  id="hours"
                  type="number"
                  label="Hours Slept"
                  variant='standard'
                  sx={{ marginLeft: '10px', width: '100px' }}
                  autoComplete="false"
                  InputProps={{ inputProps: { min: 0, max: 24 } }}
                  InputLabelProps={{ shrink: true, required: true }}
                />
              </Box>
              <Button variant='contained'>Set</Button>
            </form>
          </Box>
          <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
          <Box sx={{ width: '80%', alignSelf: 'center' }}>
            <Typography variant='h6' sx={{ fontWeight: 300, marginBottom: '30px' }}>
              {'Report Generation (7 day report):'}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}