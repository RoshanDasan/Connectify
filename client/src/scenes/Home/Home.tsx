import { Box, useMediaQuery } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import UserWidget from '../widgets/UserWidgets';
import PostUploadWidgets from '../widgets/PostUploadWidgets';
import Sidebar from '../Sidebar/Sidebar';
import { makeStyles } from '@mui/styles';
import PostsWidgets from '../widgets/PostsWidgets';
import FriensList from '../widgets/FriensList';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  setMode, setVideocallfalse } from '../../state';


const useStyles = makeStyles((theme: any) => ({
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
  const dispatch = useDispatch()
  const [data, setData] = useState(false);
  const userId: any = useSelector((state: any) => state.user._id);

  useEffect(() => {
    // Start with dark mode
    dispatch(setMode());

    // Switch to light mode after a delay
    const timeout = setTimeout(() => {
      dispatch(setMode());
    }, 1500); // Change the delay as per your requirement (2 seconds in this example)

    return () => clearTimeout(timeout); // Cleanup the timeout when the component unmounts
  }, []);


  useEffect(() => {
    // initialHandle()
  
    dispatch(setVideocallfalse())
  }, [])

  const handleButtonClick = () => {
    // Update the state or perform any action

    setData(() => !data);
  };


  return (
    <>
      <Navbar />
      <Box className={classes.contentContainer}>
        {isNonMobileScreens && <Sidebar />}
        <Box flexBasis={isNonMobileScreens ? '26%' : '100%'} mt={!isNonMobileScreens ? '2rem' : undefined}>

          <PostUploadWidgets onButtonClick={handleButtonClick} />
          <PostsWidgets data={data} onButtonClick={handleButtonClick} />

        </Box>
        {isNonMobileScreens && (
          <Box flexBasis={isNonMobileScreens ? '26%' : '100%'} ml={'2rem'}>
            <UserWidget userId={userId} picturePath={''} data={data} />
            <FriensList onButtonClick={handleButtonClick} />
          </Box>
        )}
      </Box>

      <ToastContainer position="bottom-left" />
    </>
  );
};

export default Home;
