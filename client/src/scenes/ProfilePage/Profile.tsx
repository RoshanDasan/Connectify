import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Typography, Button } from '@mui/material';
import { Theme } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import Flex from '../../components/DisplayFlex';
import Cards from '../../components/card';
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import { getPostByUser } from '../../api/apiConnection/postConnection';

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


const Profile  = ({

}) => {
  const classes = useStyles();
  const [userPosts, setUserPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const userId: string = useSelector((state: any) => state.user._id);
  const user: any = useSelector((state: any) => state.user);
  const token: string = useSelector((state: any) => state.token._id);

  const getPosts = async () => {
    try {
      setLoading(true);
      const postArray: any = await getPostByUser(userId, token);
      setUserPosts(postArray);
      setLoading(false);
    } catch (error) {
      console.log('Error retrieving user posts:', error);
    }
  };

  console.log(user,'user');
  
  
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.profileContainer}>
        <Avatar
          className={classes.avatar}
          src="/path/to/profile/image.jpg"
          alt="Profile Picture"
        />
        <Typography variant="h5" className={classes.username}>
          {user.userName}
        </Typography>
      </div>
      <div className={classes.statsContainer}>
        <div className={classes.stat}>
          <Typography variant="subtitle1" className={classes.statNumber}>
            {user.posts.length}
          </Typography>
          <Typography variant="body2">Posts</Typography>
        </div>
        <div className={classes.stat}>
          <Typography variant="subtitle1" className={classes.statNumber}>
            {/* {user.followers.length} */}0
          </Typography>
          <Typography variant="body2">Followers</Typography>
        </div>
        <div className={classes.stat}>
          <Typography variant="subtitle1" className={classes.statNumber}>
            {user.following.length}
          </Typography>
          <Typography variant="body2">Following</Typography>
        </div>
      </div>
      <Button
        variant="contained"
        sx={{ backgroundColor: 'lightgray' }}
        className={classes.button}
      >
        Edit Profile
      </Button>
      {loading ? (
        <Flex m={10} sx={{ width: '50rem' }}>
          <Skeleton variant="rectangular" width={300} height={300} />
          <Skeleton variant="rectangular" width={300} height={300} />
          <Skeleton variant="rectangular" width={300} height={300} />
        </Flex>
      ) : (
        <Flex m={10} sx={{ width: '50rem' }}>
          <Flex flexWrap="wrap">
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
                  <Flex key={index} sx={{ mt: '2rem' }}>
                    <Cards
                      key={_id}
                      id={_id}
                      userId={userId}
                      description={description}
                      userName={userName}
                      image={image}
                      likes={likes}
                      comments={comments}
                    />
                  </Flex>
                )
            )}
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default Profile;
