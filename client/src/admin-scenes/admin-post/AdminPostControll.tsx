import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles';
import AdminSidebar from '../../scenes/Sidebar/AdminSidebar'
import PostList from '../../admin-components/postList';
import Flex from '../../components/DisplayFlex';
import { useState } from 'react';


const useStyles: any = makeStyles((theme: any) => ({
    contentContainer: {

        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    navbar: {
        height: 50
    }
}));



const AdminPostControll = () => {
    const classes: any = useStyles();
    const [post, setPost] = useState(true)
    const isNonMobileScreens = useMediaQuery('(min-width: 800px)');
    return (

        <Box className={classes.contentContainer}>
        <div className={classes.navbar} style={{marginBottom:'60px'}}>
          <Typography variant='h3' p={2} textAlign={'center'}>Post list</Typography>
          <Flex justifyContent="center"> {/* Wrap the buttons in a container */}
            <Button onClick={() => setPost(true)}>All posts</Button>
            <Button onClick={() => setPost(false)}>Reported posts</Button>
          </Flex>
        </div>
        {isNonMobileScreens && <AdminSidebar />}
        <Box marginLeft={isNonMobileScreens ? 30 : undefined}>
          <PostList content={post} />
        </Box>
      </Box>
    )
}

export default AdminPostControll
