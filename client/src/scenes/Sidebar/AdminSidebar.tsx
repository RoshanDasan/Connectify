import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, Explore, Notifications, Person, Settings, ExitToApp, Message, SearchOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAdminLogout } from '../../state';


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

const AdminSidebar = () => {

  const classes: any = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(
        setAdminLogout()
    )
  }


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
            <ListItemText primary="Home" classes={{ primary: classes.listItemText }} />
          </ListItem>
          <ListItem button className={classes.listItem} onClick={() => navigate('/admin')}>
            <ListItemIcon>
              <Explore />
            </ListItemIcon>
            <ListItemText primary="User" classes={{ primary: classes.listItemText }} />
          </ListItem>
          <ListItem button className={classes.listItem} onClick={() => navigate('/admin/post/control')}>
            <ListItemIcon>
              <SearchOutlined />
            </ListItemIcon>
            <ListItemText primary="Post" classes={{ primary: classes.listItemText }} />
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
          <ListItem button className={classes.listItem} onClick={() => logout()}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" classes={{ primary: classes.listItemText }} />
          </ListItem>
        </List>
      </Drawer>

    </div>
  );
};

export default AdminSidebar;
