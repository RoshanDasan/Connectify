import { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import { Avatar, Typography, Button, Modal, useMediaQuery, Divider, Skeleton } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import Flex from '../../components/DisplayFlex';
import Cards from '../../components/card';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getUser, followUser, blockUserByUser, sendRequest } from '../../api/apiConnection/userConnection';
import Navbar from '../Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import { useFollowers, useFollowings, getPostByUser } from '../../api/apiConnection/postConnection';
import { setBlockUser, setCurrentChat, setSendRequest, removeSendRequest, setUnfollower, setUnblockUser} from '../../state';
import { useDispatch } from 'react-redux';
import { getSingleChat } from '../../api/apiConnection/chatConnection';
import { createChat } from '../../api/apiConnection/chatConnection';

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: theme.spacing(2),
  },
  username: {
    fontWeight: 'bold',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 300,
    marginBottom: theme.spacing(2),
  },
  stat: {
    textAlign: 'center',
    cursor: 'pointer',
  },
  statNumber: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(0.5),
  },
  button: {
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: '400px',
    height: '500px',
    padding: theme.spacing(2, 4, 3),
  },
}));

const Profile = () => {
  const { _id: userId, followers, requested, following } = useSelector((state: any) => state.user);
  const { id }: any = useParams();
  const classes = useStyles();
  const theme: any = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [isLoading, setIsLoading] = useState(false)
  const [userDetails, setUserDetails]: any = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [friendsData, setFriendData]: any = useState([]);
  const [clicked, setClicked] = useState(false);
  const [mainUser, setmainUser]: any = useState({});
  const [followButton, setFollowBotton] = useState('')
  const [type, setType] = useState('')
  const [blockUserState, setBlockUserState] = useState('')
  const [isRequested, setIsRequested] = useState(requested.some((user: any) => user.id === id))
  const [isFriend, setIsFriend] = useState(followers.some((user: any) => user === id))
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state: any) => state.token);
  const user = useSelector((state: any) => state.user);
  const blockList = useSelector((state: any) => state.user.blockingUsers)

  const [openModal, setOpenModal]: any = useState(false);

console.log(followers,'fo');

  const handleOpenModal = async (type: any) => {

    setOpenModal(true);
    setIsLoading(true)
    setType(type)
    if (type === 'followers') {

      const { followers }: any = await useFollowers(id, token);

      setFriendData(followers);
      setIsLoading(false)
    } else {

      const { followings }: any = await useFollowings(id, token);

      setFriendData(followings);
      setIsLoading(false)

    }
  };


  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const getPosts = async () => {
    try {
      const userDetails = await getUser(id, token);
      const postsDetails = await getPostByUser(id, token);
      setUserDetails(userDetails);
      setUserPosts(postsDetails);
    } catch (error) {
      throw error;
    }
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  const setUnfollow = async (friendId: string) => {
    await followUser(userId, friendId, token)
    dispatch(setUnfollower({
      unfollower: friendId
    }))
    if (type === 'followers') {

      const { followers }: any = await useFollowers(id, token);

      setFriendData(followers);
      setIsLoading(false)
    } else {

      const { followings }: any = await useFollowings(id, token);

      setFriendData(followings);
      setIsLoading(false)

    }


  }
  console.log(requested, 'req');


  const handleFollowbutton = () => {
    if (id !== userId) {
      if (user.followers.includes(id)) {
        setFollowBotton('unfollow')

      } else {
        setFollowBotton('follow')

      }
    } else {

      setFollowBotton('')
    }
  }

  const sendFriendRequest = async () => {
    await sendRequest(userId, id)
    setIsRequested(true)
  }

  const cancelFriendRequest = async () => {
    await sendRequest(userId, id)
    setIsRequested(false)
  }

  const unfollow = async () => {
    await followUser(userId, id, token)
    setIsFriend(false)
    setIsRequested(false)

  }

  useEffect(() => {
    getPosts();
    setmainUser(user)
    handleFollowbutton()

  }, [id, clicked, followButton]);

  useEffect(() => {

    if (blockList.some((list: any) => list === id)) {
      setBlockUserState('Blocked')
    } else {
      setBlockUserState('Unblocked')
    }
  }, [id, blockList])


  const handleMessage = async () => {
    try {
      await createChat(userId, id, token);
      const { chat } = await getSingleChat(userId, id, token);
      dispatch(setCurrentChat({ currentchat: chat[0] }));
      navigate('/chat')
      // Handle the response as needed
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlock = async () => {
    const response = await blockUserByUser(userId, id)
    toast.success(response.state)
    dispatch(setBlockUser({ blockUser: id }))

  }

  const handleUnblock = async () => {
    const response = await blockUserByUser(userId, id)

    toast.success(response.state)
    dispatch(setUnblockUser({ unblockUser: id }))
  }

  const handleSendRequest = async (friendId: string) => {
    await sendRequest(userId, friendId)
    dispatch(removeSendRequest({ id: friendId }))
  }

  const handleRemoveRequest = async (friendId: string, userName: string, dp: string) => {
    await sendRequest(userId, friendId)
    dispatch(setSendRequest({ id: friendId, userName, dp }))
  }




  return (
    <>
      <Navbar />
      {!isMobile && <Sidebar />}

      <Flex />

      <div className={classes.root} style={{ marginLeft: '15vw' }}>
        <Flex>
          <div className={classes.profileContainer}>
            {userDetails.dp ? (
              <div style={{ margin: '0 10rem 2rem 0rem' }}>
                <Avatar
                  sx={{ width: '10rem', height: '10rem' }}
                  alt={userDetails.userName}
                  src={userDetails.dp}
                />
              </div>
            ) : (
              <Avatar alt={userDetails.userName} />
            )}
          </div>

          {userId === id && (
            <Button
              style={{ margin: '0 2rem 8rem 2rem' }}
              variant="contained"
              sx={{ backgroundColor: 'lightgray' }}
              className={classes.button}
              onClick={() => navigate(`/accounts/edit/${id}`)}
            >
              Edit Profile
            </Button>
          )}

          {userId !== id && (
            blockUserState === 'Blocked' ? (
              <Button
                style={{ margin: '0 2rem 8rem 2rem' }}
                variant="contained"
                sx={{ backgroundColor: 'lightgray' }}
                className={classes.button}
                onClick={() => handleUnblock()}
              >
                Unblock
              </Button>

            ) : (
              <Button
                style={{ margin: '0 2rem 8rem 2rem' }}
                variant="contained"
                sx={{ backgroundColor: 'lightgray' }}
                className={classes.button}
                onClick={() => handleBlock()}

              >
                Block
              </Button>

            )

          )}

        </Flex>
        {userId !== id && (
          <Flex>
            {isFriend ? (
              <Button variant='outlined' color='info' sx={{ mr: 5, mb: 2 }} onClick={unfollow}>Unfollow</Button>
            ) : (
              isRequested && !isFriend ? (
                <Button variant='text' color='info' sx={{ mr: 5, mb: 2 }} onClick={cancelFriendRequest}>Requested</Button>
              ) : (
                <Button variant='outlined' color='info' sx={{ mr: 5, mb: 2 }} onClick={sendFriendRequest}>Follow</Button>
              )
            )}
            <Button variant='outlined' color='info' sx={{ ml: 5, mb: 2 }} onClick={handleMessage}>Message</Button>
          </Flex>
        )}

        <Typography>{userDetails.bio}</Typography>

        <Typography variant="h5" m={2} className={classes.username}>
          {userDetails.name}
        </Typography>

        <div className={classes.statsContainer}>
          <div className={classes.stat}>
            <Typography variant="subtitle1" className={classes.statNumber}>
              {userPosts ? userPosts.length : 0}
            </Typography>
            <Typography variant="body2">Posts</Typography>
          </div>
          <div className={classes.stat} onClick={() => handleOpenModal('followers')}>
            <Typography variant="subtitle1" className={classes.statNumber}>
              {followers ? followers.length : 0}
            </Typography>
            <Typography variant="body2">Followers</Typography>
          </div>
          <div className={classes.stat} onClick={() => handleOpenModal('following')}>
            <Typography variant="subtitle1" className={classes.statNumber}>
              {following ? following.length : 0}
            </Typography>
            <Typography variant="body2">Following</Typography>
          </div>
        </div>

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          className={classes.modal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className={classes.modalContent} style={{ maxHeight: '500px', overflowY: 'scroll' }}>
            <Typography variant='h2' textAlign='center' >
              {type === 'followers' ? 'Followers' : 'Following'}
            </Typography>
            <Divider />
            {isLoading ? (
              <>

                <Skeleton sx={{ width: '95%', height: '60px', margin: '10px' }} />
                <Skeleton sx={{ width: '95%', height: '60px', margin: '10px' }} />
              </>

            ) : (
              <>
                {friendsData.length === 0 && <Typography>No friends</Typography>}
                {
                  friendsData?.map((friend: any, index: number) => (
                    <Flex mt={3} key={index}>

                      <div style={{ display: 'flex' }}>
                        {friend.dp ? (
                          <div className="profile-picture">
                            <Avatar alt={friend.userName} src={friend.dp} />
                          </div>
                        ) : (
                          <Avatar alt={friend.userName} />
                        )}
                        <div style={{ paddingLeft: '15px' }}>
                          <Typography variant="h6" key={friend.id}>{friend.userName}</Typography>
                          <Typography>{friend.name}</Typography>
                        </div>
                      </div>
                      {friend._id !== userId ? (
                        
                          mainUser.followers.includes(friend._id) ? (
                            <Button
                              sx={{ backgroundColor: 'whitesmoke', borderRadius: '10px', color: 'black' }}
                              onClick={() => setUnfollow(friend._id)}
                            >
                              Remove
                            </Button>
                          ) : (
                            requested.some((request: any) => request.id === friend._id) ? (
                              <Button
                                sx={{ backgroundColor: 'whitesmoke', borderRadius: '10px', color: 'black' }}
                                onClick={() => handleSendRequest(friend._id)}
                              >
                                Requested
                              </Button>
                            ) : (
                              <Button
                                sx={{ backgroundColor: 'whitesmoke', borderRadius: '10px', color: 'black' }}
                                onClick={() => handleRemoveRequest(friend._id, friend.userName, friend.dp)}
                              >
                                Request
                              </Button>
                            )
                          )
                        
                      ):(
                        <Button sx={{color:'black'}} onClick={() => navigate(`/profile/${userId}`)}>view</Button>
                      )}

                    </Flex>
                  ))
                }
              </>



            )}
          </div>
        </Modal>


        <Flex
          width={isMobile ? '100%' : '60rem'}
          sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}
        >
          {userPosts?.map(({ _id, userId, description, userName, image, likes, comments }, index) =>
            image ? (
              <Flex key={index} sx={{ m: isMobile ? '2rem .2rem .2rem .2rem' : '5rem .2rem .2rem .2rem' }}>
                <Cards
                  key={_id}
                  id={_id}
                  userId={userId}
                  description={description}
                  userName={userName}
                  image={image}
                  likes={likes}
                  comments={comments}
                  click={handleClick}
                  borderView={userId === id}
                />
              </Flex>
            ) : null
          )}
        </Flex>
        <ToastContainer position="bottom-left" />
      </div>
    </>
  );
};

export default Profile;
