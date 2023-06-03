import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, Explore, Notifications, Person, Settings, ExitToApp, Message } from '@mui/icons-material';
import { setLogout } from '../../state';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const drawerWidth = 240;

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: theme.mixins.toolbar,
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
  },
  listItemText: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const Sidebar: React.FC = () => {

const userId = useSelector((state:any) => state.user._id)
  const userStatus = {
   user: true
  };

  
    
    const classes = useStyles();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const Logout = () => {
      
      dispatch(setLogout());
      navigate('/');
    };
  
  

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" classes={{ primary: classes.listItemText }} onClick={() => navigate('/')}/>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <Explore />
            </ListItemIcon>
            <ListItemText primary="Explore" classes={{ primary: classes.listItemText }} />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>
            <ListItemText primary="Notifications" classes={{ primary: classes.listItemText }} />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <Message />
            </ListItemIcon>
            <ListItemText primary="Message" classes={{ primary: classes.listItemText }} />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" classes={{ primary: classes.listItemText }} onClick={() => navigate(`/profile/${userId}`, { state: userStatus })}/>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" classes={{ primary: classes.listItemText }} />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" classes={{ primary: classes.listItemText }} onClick={Logout}/>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
function dispatch(arg0: { payload: undefined; type: "auth/setLogout"; }) {
  throw new Error('Function not implemented.');
}

