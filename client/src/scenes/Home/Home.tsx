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
import { useState } from 'react';


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
  const user: any = useSelector((state: any) => state.user);

  const [data, setData] = useState('');

  const handleButtonClick = () => {
    // Update the state or perform any action
    setData('Button clicked!');
  };



  let _id = '';
  if (user) {
    _id = user._id;
  }

  return (
    <>
      <Navbar />
      <Box className={classes.contentContainer}>
        {isNonMobileScreens && <Sidebar />}
        <Box flexBasis={isNonMobileScreens ? '26%' : '100%'} mt={!isNonMobileScreens ? '2rem' : undefined}>
     
          <PostUploadWidgets  />
          <PostsWidgets />
  
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis={isNonMobileScreens ? '26%' : '100%'} ml={'2rem'}>
            <UserWidget userId={_id} picturePath={''} data={data}/>
            <FriensList onButtonClick={handleButtonClick}/>
          </Box>
        )}
      </Box>

      <ToastContainer position="bottom-left" />
    </>
  );
};

export default Home;
