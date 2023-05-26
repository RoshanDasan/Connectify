import React from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Typography, Button } from '@mui/material';
import { Theme } from '@mui/material';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  username: {
    marginTop: theme.spacing(2),
    fontWeight: 'bold',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    width: '100%',
    maxWidth: 300,
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
}));

interface ProfileProps {
  username: string;
  followers: number;
  following: number;
  posts: number;
}

const Profile: React.FC<ProfileProps> = ({
  username,
  followers,
  following,
  posts,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} src="/path/to/profile/image.jpg" alt="Profile Picture" />
      <Typography variant="h5" className={classes.username}>
        {username}
      </Typography>
      <div className={classes.statsContainer}>
        <div className={classes.stat}>
          <Typography variant="subtitle1" className={classes.statNumber}>
            {posts}
          </Typography>
          <Typography variant="body2">Posts</Typography>
        </div>
        <div className={classes.stat}>
          <Typography variant="subtitle1" className={classes.statNumber}>
            {followers}
          </Typography>
          <Typography variant="body2">Followers</Typography>
        </div>
        <div className={classes.stat}>
          <Typography variant="subtitle1" className={classes.statNumber}>
            {following}
          </Typography>
          <Typography variant="body2">Following</Typography>
        </div>
      </div>
      <Button variant="contained" color="primary" className={classes.button}>
        Edit Profile
      </Button>
    </div>
  );
};

export default Profile;
