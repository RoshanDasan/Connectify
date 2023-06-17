import React, { useContext, useState } from 'react';
import { makeStyles } from '@mui/styles';
import copyToClipBoard from 'copy-to-clipboard';
import { SocketContext } from '../../scenes/Videocall/SocketContext';
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Phone, PhoneDisabled } from '@mui/icons-material';

const useStyles = makeStyles((theme: any) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    container: {
        width: '600px',
        margin: '35px 0',
        padding: 0,
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    margin: {
        marginTop: 20,
    },
    padding: {
        padding: 20,
    },
    paper: {
        padding: '10px 20px',
        border: '2px solid black',
    },
}));

const Options = ({ children }: any) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('')
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Paper elevation={10} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete='off'>
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant='h6'>Account info</Typography>
                            <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <Typography>{me}</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant='h6'>Make a call</Typography>
                            <TextField label='Id to call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                            {callAccepted && !callEnded ? (
                                <Button variant='contained' color='secondary' fullWidth startIcon={<PhoneDisabled fontSize='large' />}
                                    onClick={leaveCall}
                                    className={classes.margin}
                                >
                                    Hang up
                                </Button>
                            ) : (
                                <Button variant='contained' color='primary' fullWidth startIcon={<Phone fontSize='large' />}
                                    onClick={() => callUser(idToCall)}
                                    className={classes.margin}
                                >
                                    call
                                </Button>

                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>


        </Container>
    )
}

export default Options
