import { AppBar, Typography } from '@mui/material'
import Notification from '../../components/videoCall/Notification'
import Options from '../../components/videoCall/Options'
import VideoPlayer from '../../components/videoCall/VideoPlayer'
import { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'


const VideoCall = () => {

    return (
        <div>
            <Navbar />
            <Options>
                <Notification />
            </Options>
            <VideoPlayer />
        </div>
    )
}

export default VideoCall
