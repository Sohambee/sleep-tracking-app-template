import React, { useState } from 'react';
import axios from 'axios';
import { Alert, Box, Button, Divider, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        msTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: 'none'
    },
    alertBox: {
        width: '100%'
    },
    alert: {
        borderRadius: '14px !important',
        marginBottom: '15px',
        transition: 'all 1s ease-out'
    },
    form: {
        borderRadius: '14px',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        boxShadow: '0px 0px 25px 2px rgba(0, 0, 0, 0.3)'
    },
    title: {
        alignSelf: 'center',
        fontSize: '24px !important',
    },
    textField: {
        marginBottom: '15px !important',
        width: '80%',
        alignSelf: 'center',
        '& label': {
            fontWeight: '300',
            color: 'black'
        }
    },
    button: {
        marginBottom: '5px !important',
        marginTop: '5px !important',
        width: '100px',
        alignSelf: 'center'
    }
})

export default function Registration() {
    return (
        <Box>
            <Box className={classes.container}>
                <Box className={classes.alertBox}>
                    {flag && (
                        <Alert className={classes.alert} severity='error'>{res}</Alert>
                    )}
                </Box>
                <form className={classes.form}>
                    <Typography className={classes.title}>Registration</Typography>
                    <TextField
                        className={classes.textField}
                        type='text'
                        placeholder='Enter your full name'
                        label='Full Name'
                        variant='standard'
                    />
                    <TextField
                        className={classes.textField}
                        type='email'
                        placeholder='Enter your email'
                        label='Email'
                        variant='standard'
                    />
                    <TextField
                        className={classes.textField}
                        type='password'
                        placeholder='Enter your password'
                        label='Password'
                        variant='standard'
                    />
                    <Button className={classes.button} type='submit' variant='contained'>Register</Button>
                    <Divider />
                    <Button className={classes.button} href='/' variant='contained'>Login</Button>
                </form>
            </Box>
        </Box>

    )
}
