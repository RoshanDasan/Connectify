import { Box, Typography, useMediaQuery } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import AdminSidebar from '../Sidebar/AdminSidebar';
import UserList from '../../admin-scenes/admin-home/UserList';



const useStyles = makeStyles((theme: any) => ({
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



const AdminHome = () => {
    const classes = useStyles();
    const isNonMobileScreens = useMediaQuery('(min-width: 800px)');
    const dispatch = useDispatch()


    return (
        <>

            <Box className={classes.contentContainer}>
                <div className={classes.navbar}>
                    <Typography textAlign={'center'} variant='h3' p={2}>User list</Typography>
                </div>
                {isNonMobileScreens && <AdminSidebar />}
                <Box marginLeft={isNonMobileScreens ? 30 : undefined}>
                    <UserList />
                </Box>
            </Box>

            <ToastContainer position="bottom-left" />
        </>
    );
};

export default AdminHome;
