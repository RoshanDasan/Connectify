import React, { useContext, useEffect, useRef } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { SocketContext } from '../../scenes/Videocall/SocketContext';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
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
  const classes = useStyles();
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  console.log(stream,'stream');
  console.log(userVideo,'calstream');
  
  const userVideoRef = useRef(null);
  const myVideoRef = useRef(null);

  useEffect(() => {
    if (stream && myVideoRef.current) {
      myVideoRef.current.srcObject = stream;
    }
    if (callAccepted && !callEnded && call.stream && userVideoRef.current) {
      userVideoRef.current.srcObject = userVideo;
    }
  }, [stream, callAccepted, callEnded, call]);

  return (
    <Grid container className={classes.gridContainer}>
      {/* My own video */}
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideoRef} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}

      {/* Receiver video */}
      {callAccepted && !callEnded && call.stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideoRef} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
