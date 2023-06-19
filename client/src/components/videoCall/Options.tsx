import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import copyToClipBoard from 'copy-to-clipboard';
import { SocketContext } from '../../scenes/Videocall/SocketContext';
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Phone, PhoneDisabled } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Flex from '../DisplayFlex';
import { getUser } from '../../api/apiConnection/userConnection';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
}));

const Options = ({ children }: { children: React.ReactNode }) => {
  const {
    callAccepted,
    name,
    setName,
    setMe,
    callEnded,
    leaveCall,
    callUser,
    activeForCall,
    userToCall,
    setUserToCall
  } = useContext(SocketContext);

  const members = useSelector((state: any) => state.currentchat.members);

  const userId = useSelector((state: any) => state.user._id);
  const token = useSelector((state: any) => state.token);

  const classes = useStyles();

  useEffect(() => {
    const member = members.filter((user: string) => user !== userId);
    getName(member).then((responseName) => {
      setName(responseName);
      activeForCall.forEach((user: any) => {
        if (user.userId === member[0]) {
          setUserToCall(user.socketId)
        }
        if(userId === user.userId){
          setMe(user.socketId)
        }
      });
    });
  }, [activeForCall, members, name, setName, userId]);

  const handleCallButtonClick = () => {
    // location.reload()
    if (userToCall.length) {
      callUser(userToCall);
    } else {
      toast.error('User not available to call');
    }
  };

  const getName = async (userId: string) => {
    const response = await getUser(userId, token);
    return response.userName;
  };

  return (
    <div className={classes.root}>
      {callAccepted && !callEnded ? (
        <Button
          variant='contained'
          color='secondary'
          fullWidth
          startIcon={<PhoneDisabled fontSize='large' />}
          onClick={leaveCall}
        >
          Hang up
        </Button>
      ) : (
        <div className={classes.buttonContainer}>
          <Button
            variant='contained'
            color='primary'
            startIcon={<Phone fontSize='large' />}
            onClick={handleCallButtonClick}
          >
            Call {name}
          </Button>
        </div>
      )}

      {/* Render children if necessary */}
      {children}
      <ToastContainer position='bottom-left' />
    </div>
  );
};

export default Options;
