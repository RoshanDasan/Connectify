import { useEffect } from 'react'
import Notification from '../../components/videoCall/Notification'
import Options from '../../components/videoCall/Options'
import VideoPlayer from '../../components/videoCall/VideoPlayer'
import Navbar from '../Navbar/Navbar'
import { useDispatch } from 'react-redux'
import { setVideocallTrue } from '../../state'



const VideoCall = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setVideocallTrue())
    },[])
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
