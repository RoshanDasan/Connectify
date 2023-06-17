import { AppBar, Typography } from '@mui/material'
import Notification from '../../components/videoCall/Notification'
import Options from '../../components/videoCall/Options'
import VideoPlayer from '../../components/videoCall/VideoPlayer'
import { useEffect } from 'react'


const VideoCall = () => {

    return (
        <div>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Video call</Typography>
            </AppBar>
            <Options>
                <Notification />
            </Options>
            <VideoPlayer />
        </div>
    )
}

export default VideoCall
