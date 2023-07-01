import { useEffect, useState } from 'react'
import { getUser } from '../../api/apiConnection/userConnection';
import { Avatar } from '@mui/material';
import './chatlist.css'
import Flex from '../DisplayFlex';

const ChatList = ({ data, userId, token, online }: any) => {

  const [userData, setUserData]: any = useState(null);





  useEffect(() => {
    const user = data.members.find((id: any) => id !== userId);
    const getUserData = async () => {
      try {
        const data = await getUser(user, token);
        setUserData(data);
      } catch (error) {
        throw error
      }
    };

    getUserData();

  }, [])
  return (
    <>
      <div className="chat-header">
        <div className="follower">
          <Flex sx={{ justifyContent: 'flex-start' }}>
            {userData?.dp ? (
              <div className="profile-picture">
                {online && <div className="online-dot"></div>}


                <Avatar alt={userData.userName} src={userData.dp} sx={{ mr: '10px' }} />
              </div>
            ) : (
              <Avatar alt={userData?.userName} sx={{ m: '10px' }} />
            )}
            <div className="name" style={{ fontSize: '0.8rem' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>{userData?.userName}</span>
              <span>{online ? 'online' : 'offline'}</span>

            </div>

          </Flex>
        </div>
      </div>
    </>

  )
}

export default ChatList
