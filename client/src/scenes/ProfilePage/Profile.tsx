import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import { Avatar, Typography, Button, Box, TextField, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import Flex from '../../components/DisplayFlex';
import Cards from '../../components/card';
import { useSelector } from 'react-redux';
import Modal from '@mui/material/Modal'
import { useParams } from 'react-router-dom';
import { getUser } from '../../api/apiConnection/userConnection';
import { getPostByUser } from '../../api/apiConnection/postConnection';
import Navbar from '../Navbar/Navbar';
import { ToastContainer } from 'react-toastify';


const useStyles = makeStyles((theme: Theme) => ({
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
}));

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Profile = () => {
  const classes = useStyles();
  const theme: any = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const [userDetails, setUserDetails] = useState<any[]>([]);
  const [userPosts, setUserPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false)
  const { id } = useParams<{ id: any }>();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const token: string = useSelector((state: any) => state.token);
  const userid: string = useSelector((state: any) => state.user._id);

  
  const getPosts = async () => {
    try {
      setLoading(true);
      const userDetails: any = await getUser(id, token);
      const postsDetails: any = await getPostByUser(id, token)
      setUserDetails(userDetails)
      setUserPosts(postsDetails);

      setLoading(false);
    } catch (error) {
      throw error
    }
  };

  const clikedFun = () => {

    setClicked(() => !clicked)
  }

  useEffect(() => {
    getPosts().then(() => {
    })

  }, [id, clicked]);

  

  return (
    <>
      <Navbar />
    {!isMobile && (

   <Sidebar /> 
    )}
    <div className={classes.root} style={{marginLeft: '15vw'}}>
      <div className={classes.profileContainer}>
        <Avatar
          className={classes.avatar}
          src="/path/to/profile/image.jpg"
          alt="Profile Picture"
        />
        <Typography variant="h5" className={classes.username}>
          {userDetails.name}
        </Typography>
      </div>

      {/* modal open  */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <TextField
              label="Name"
              variant="filled"
              fullWidth
              color="primary"
              InputLabelProps={{
                shrink: true,
                style: { color: '#9e9e9e' },
              }}
              InputProps={{
                style: {
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                },
              }}
            />
          </Box>
        </Modal>
      </div>

      <div className={classes.statsContainer}>
        <div className={classes.stat}>
          <Typography variant="subtitle1" className={classes.statNumber}>
            {userPosts.length}
          </Typography>
          <Typography variant="body2">Posts</Typography>
        </div>
        <div className={classes.stat}>
          <Typography variant="subtitle1" className={classes.statNumber}>
            {userDetails.followers ? userDetails.followers.length : 0}
          </Typography>
          <Typography variant="body2">Followers</Typography>
        </div>
        <div className={classes.stat}>
          <Typography variant="subtitle1" className={classes.statNumber}>
            {userDetails.following ? userDetails.following.length : 0}
          </Typography>
          <Typography variant="body2">Following</Typography>
        </div>
      </div>

      {userid == id && (
              <Button
              variant="contained"
              sx={{ backgroundColor: 'lightgray' }}
              className={classes.button}
              onClick={handleOpen}
            >
              Edit Profile
            </Button>
      )}
      


      <Flex width={isMobile ? '100%' : '60rem'} sx={{ display:'flex', flexWrap:'wrap', justifyContent: 'flex-start'}}>
        {userPosts.map(
          (
            {
              _id,
              userId,
              description,
              userName,
              image,
              likes,
              comments,
            },
            index
          ) =>
            image && (
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
                  click={clikedFun}
                  borderView={userid === id}
                />
              </Flex>
            )
        )}
      </Flex>
      <ToastContainer position="bottom-left" />
    </div>
    </>
   
  );
};

export default Profile;
