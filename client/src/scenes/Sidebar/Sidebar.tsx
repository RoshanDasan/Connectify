import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, TextField, Button, Typography, Badge } from '@mui/material';
import { Home, Person, ExitToApp, Message, SearchOutlined, PersonAdd } from '@mui/icons-material';
import { Skeleton } from '@mui/lab';
import { setLogout } from '../../state';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useSearchUser } from '../../api/apiConnection/userConnection';
import Flex from '../../components/DisplayFlex';
import NotificationComponent from '../../components/NotificationComponent';

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
    width: 300,
    flexShrink: 0,
    marginLeft: 'auto',
  },
  searchDrawerPaper: {
    width: 350,
    padding: 20,
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
  const [searchByUser, setSearchByUser] = useState('userName')
  const [data, setData]=useState([])
  const [notificationsOpen, setNotificationOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { _id: userId, requests } = useSelector((state: any) => state.user);
  const userStatus = {
    user: true,
  };

  const classes: any = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const toggleSearchDrawer = () => {
    setSearchOpen(!searchOpen);
  };
  const toggleNotificationDrawer = () => {
    setNotificationOpen(!notificationsOpen);
  };

  const handleInput = (e: any) => {
    setSearchText(e.target.value);
  };

  const getSearchData = async () => {
    setIsLoading(true)
    var  data: any = await useSearchUser(searchText, searchByUser);
    setData(data)
    setIsLoading(false)

  }

 useEffect(() => {

   getSearchData()
 },[searchText])
   
    
  



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
    <div className={classes.root} >
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
              <SearchOutlined />
            </ListItemIcon>
            <ListItemText primary="Search" classes={{ primary: classes.listItemText }} onClick={toggleSearchDrawer} />
          </ListItem>
          <ListItem button className={classes.listItem} onClick={() => navigate('/chat')}>
            <ListItemIcon>
              <Message />
            </ListItemIcon>
            <ListItemText primary="Message" classes={{ primary: classes.listItemText }} />
          </ListItem>
          <ListItem button className={classes.listItem} >
            <ListItemIcon>
              {requests.length ? (
                <Badge color="info" badgeContent={requests.length}>
                  <PersonAdd sx={{ fontSize: '25px' }} />
                </Badge>
              ) : (
                <PersonAdd sx={{ fontSize: '25px' }} />

              )}
            </ListItemIcon>
            <ListItemText primary="Requests" classes={{ primary: classes.listItemText }} onClick={toggleNotificationDrawer} />
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

          <ListItem button className={classes.listItem} onClick={Logout}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" classes={{ primary: classes.listItemText }} />
          </ListItem>
        </List>
      </Drawer>

      {/* drawer for searching */}
      <Drawer
        className={classes.searchDrawer}
        anchor="left"
        open={searchOpen}
        onClose={toggleSearchDrawer}
        classes={{
          paper: classes.searchDrawerPaper,
        }}
      >
        <Typography variant='h3'>Search</Typography>
        <div className={classes.toolbar} />
        <Flex>
          <Button variant={searchByUser === 'userName' ? 'outlined' : 'text'} onClick={() => setSearchByUser('userName')}>User</Button>
          <Button variant={searchByUser === 'gender' ? 'outlined' : 'text'} onClick={() => setSearchByUser('gender')}>Gender</Button>
          <Button variant={searchByUser === 'city' ? 'outlined' : 'text'} onClick={() => setSearchByUser('city')}>Location</Button>
        </Flex>

        <TextField
          onKeyUp={handleInput}
          className={classes.searchField}
          label="Search....."
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

      {/* drawer for notifications */}

      <Drawer
        className={classes.searchDrawer}
        anchor="left"
        open={notificationsOpen}
        onClose={toggleNotificationDrawer}
        classes={{
          paper: classes.searchDrawerPaper,
        }}

      >
        <Typography variant='h3'>Notifications</Typography>
        <div className={classes.toolbar} />
        <NotificationComponent />
      </Drawer>
    </div>
  );
};

export default Sidebar;
