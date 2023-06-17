import React, { useContext } from 'react'
import { SocketContext } from '../../scenes/Videocall/SocketContext'
import { Button } from '@mui/material'

const Notification = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext)
  return (
    <>
    {call.isRecieveCall && !callAccepted && (
        <div >
            <h1>{call.name} is calling .... </h1>
            <Button variant='contained' color='primary' onClick={answerCall}>
                 
            </Button>
        </div>
    )}
    </>
  )
}

export default Notification
