import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import UserWidget from '../widgets/UserWidgets';
import PostUploadWidgets from '../widgets/PostUploadWidgets';
import Sidebar from '../Sidebar/Sidebar';
import { makeStyles } from '@mui/styles';
import PostsWidgets from '../widgets/PostsWidgets';
import Friend from '../../components/Friend';
import Flex from '../../components/DisplayFlex';
import FriensList from '../widgets/FriensList';


const useStyles = makeStyles((theme) => ({
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const isNonMobileScreens = useMediaQuery('(min-width: 800px)');
  const { _id } = useSelector((state: any) => state.token.user);

  return (
    <>
      <Navbar />
      <Box className={classes.contentContainer}>
        {isNonMobileScreens && <Sidebar />}

       
        <Box flexBasis={isNonMobileScreens ? '26%' : '100%'} mt={!isNonMobileScreens ? '2rem' : undefined}>
          <PostUploadWidgets picturePath={null} />
          <PostsWidgets />
          
          
          
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis={isNonMobileScreens ? '26%' : '100%'} ml={'2rem'}>
          <UserWidget userId={_id} picturePath={''}/>
         <FriensList />
        </Box>
        )}

        
      </Box>

      <ToastContainer position="bottom-left" />
    </>
  );
};

export default Home;
