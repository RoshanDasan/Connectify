import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, TextField } from '@mui/material';
import { Home, Explore, Notifications, Person, Settings, ExitToApp, Message, SearchOutlined } from '@mui/icons-material';
import { Skeleton } from '@mui/lab';
import { setLogout } from '../../state';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useSearchUser } from '../../api/apiConnection/userConnection';

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
  searchDrawer: {
    width: 240,
    flexShrink: 0,
    marginLeft: 'auto',
  },
  searchDrawerPaper: {
    width: 240,
    backgroundColor: theme.palette.background.default,
  },
  searchField: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const Sidebar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const userId = useSelector((state: any) => state.user._id);
  const token = useSelector((state: any) => state.token);
  const userStatus = {
    user: true,
  };

  const classes: any = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const toggleSearchDrawer = () => {
    setSearchOpen(!searchOpen);
  };

  const handleInput = (e: any) => {
    setSearchText(e.target.value);
  };


  var { data, isLoading }: any = useSearchUser(searchText, token);




  useEffect(() => {
    if (data) {
      setSearchResults(data);
    }
    // Add any necessary error handling
  }, [data]);

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
            <ListItemText primary="Home" classes={{ primary: classes.listItemText }} onClick={() => navigate('/')} />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <Explore />
            </ListItemIcon>
            <ListItemText primary="Explore" classes={{ primary: classes.listItemText }} />
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <SearchOutlined />
            </ListItemIcon>
            <ListItemText primary="Search" classes={{ primary: classes.listItemText }} onClick={toggleSearchDrawer} />
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
          <ListItem
            button
            className={classes.listItem}
            onClick={() => navigate(`/profile/${userId}`, { state: userStatus })}
          >
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" classes={{ primary: classes.listItemText }} />
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
          <ListItem button className={classes.listItem} onClick={Logout}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" classes={{ primary: classes.listItemText }} />
          </ListItem>
        </List>
      </Drawer>
      <Drawer
        className={classes.searchDrawer}
        anchor="left"
        open={searchOpen}
        onClose={toggleSearchDrawer}
        classes={{
          paper: classes.searchDrawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <TextField
          onKeyUp={handleInput}
          className={classes.searchField}
          label="Search"
          variant="outlined"
          size="small"
          fullWidth
        />
        {isLoading ? (
          <>
            <Skeleton sx={{ margin: '.2rem', width: '95%', height: '50px' }} />
            <Skeleton sx={{ margin: '.2rem', width: '95%', height: '50px' }} />

          </>


        ) : (
          searchResults.length > 0 && (
            <List>
              {searchResults.map((result: any) => (
                <ListItem button key={result._id} className={classes.listItem} >
                  <ListItemText primary={result.userName} classes={{ primary: classes.listItemText }} onClick={() => navigate(`/profile/${result._id}`)} />
                </ListItem>
              ))}
            </List>
          )
        )}

      </Drawer>
    </div>
  );
};

export default Sidebar;
