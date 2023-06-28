import Flex from './DisplayFlex'
import { Avatar, Button, IconButton, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';
import { requestResponse } from '../api/apiConnection/userConnection';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { setRequests, setFollower } from '../state';

const NotificationComponent = () => {
  const [click, setClick] = useState(false);
  const { _id, requests } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setClick(false);
  }, [requests]);

  const acceptRequest = async (id: string, friendId: string, type: string) => {
    console.log(type);
    const response = await requestResponse(id, friendId, type);
    setClick(true);
    dispatch(setRequests({ id: friendId }));
    toast.success(response);
    dispatch(setFollower({ followers: friendId }))
  }

  const rejectRequest = async (id: string, friendId: string, type: string) => {
    console.log(type);
    const response = await requestResponse(id, friendId, type);
    setClick(true);
    dispatch(setRequests({ id: friendId }));
    toast.success(response);
  }

  return (
    <>
      {requests.map(({ id, userName, dp }: any) => (
        <Flex key={id} sx={{ marginBottom: 2 }}>
          {dp ? (
            <div className="profile-picture">
              <Avatar alt={userName} src={dp} />
            </div>
          ) : (
            <Avatar alt={userName} />
          )}

          <div style={{ width: 130 }}>
            <Typography variant='h6'>{`${userName} started following you`}</Typography>
          </div>
          <Button variant='contained' color='info' onClick={() => acceptRequest(_id, id, 'accept')}>accept</Button>
          <IconButton onClick={() => rejectRequest(_id, id, 'reject')}>
            <CloseIcon />
          </IconButton>
        </Flex>
      ))}
    </>
  );
}

export default NotificationComponent;
