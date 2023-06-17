import React, { useContext, useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { SocketContext } from '../../scenes/Videocall/SocketContext';
import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles((theme: any) => ({
    video: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
    },
    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    paper: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px',
    },
}));

const VideoPlayer = () => {
    const classes = useStyles()
    const { name, callAccepted, myvideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
   console.log(myvideo, stream);
   
   
    
    return (
        <Grid container className={classes.gridContainer}>
            
            {/* my own video */}
            {stream && myvideo && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h5'>{name || 'Name'}</Typography>
                        <video playsInline muted ref={myvideo} autoPlay className={classes.video} />
                    </Grid>
                </Paper>

            )}


            {/* reciver video */}
            {
                callAccepted && !callEnded && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h5'>{call.name || 'Name'}</Typography>
                            <video playsInline ref={userVideo} autoPlay className={classes.video} />
                        </Grid>
                    </Paper>   

                )
            }



        </Grid>
    )
}

export default VideoPlayer
