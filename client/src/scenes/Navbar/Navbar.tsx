import React, { useState } from 'react';
import { Box, IconButton, InputBase, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery, Badge } from '@mui/material';
import { Message, DarkMode, LightMode, Notifications, Help, Menu, Close } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { setMode, setLogout } from '../../state';
import { useNavigate } from 'react-router-dom';
import Flex from '../../components/DisplayFlex';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { unsetNotification } from '../../state';

const Navbar: React.FC = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);
  const notifications = useSelector((state: any) => state.notifications);
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const theme = useTheme();
  const light = theme.palette.background.paper;
  const dark = theme.palette.secondary.dark;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.paper;

  const fullName = user.userName;

  const handleLogout = () => {
    dispatch(setLogout());
    navigate('/');
  };

  const handleRemoveNotification = (index: any) => {
    console.log(index);
    dispatch(unsetNotification({
      index
    }))

  }

  return (
    <Flex sx={{ background: alt, alignItems: 'center' }}>
      <Flex gap='1.75rem' alignItems='center'>
        <Typography
          fontWeight='bold'
          fontSize='clamp(1rem, 2rem, 2.25rem)'
          color='primary'
          onClick={() => navigate('/home')}
          sx={{
            '&:hover': {
              color: primaryLight,
              cursor: 'pointer',
            },
          }}
        >
          <img style={{ height: '60px' }} src="../assets/logo.png" alt='' />
        </Typography>
      </Flex>
      {isNonMobileScreens ? (
        <Flex gap='2rem' alignItems='center'>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <Tooltip title='Light mode' placement='bottom'>
                <LightMode sx={{ fontSize: '25px' }} />
              </Tooltip>
            ) : (
              <Tooltip title='Dark mode' placement='bottom'>
                <DarkMode sx={{ color: 'black', fontSize: '25px' }} />
              </Tooltip>
            )}
          </IconButton>
          <Tooltip title='Chat' placement='bottom'>
            <Message sx={{ fontSize: '25px' }} />
          </Tooltip>
          {/* notifications */}
          <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
              <div>
                {notifications.length ? (
                  <Badge color="info" badgeContent={notifications.length}>
                    <Notifications sx={{ fontSize: '25px' }} {...bindToggle(popupState)} />
                  </Badge>
                ) : (
                  <Notifications sx={{ fontSize: '25px' }} {...bindToggle(popupState)} />

                )}

                <Popper {...bindPopper(popupState)} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper>
                        {notifications.map((notification: any, index: any) => (
                          <Typography sx={{ p: 2 }}><Button onClick={() => handleRemoveNotification(index)} variant='text' sx={{ color: 'black',  textTransform: 'none' }}>{notification}</Button></Typography>
                        ))}
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </div>
            )}
          </PopupState>
          <Typography>{fullName}</Typography>
          <FormControl sx={{ component: 'div' }}>
            {/* Add form control content */}
          </FormControl>
        </Flex>
      ) : (
        <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
          <Menu />
        </IconButton>
      )}

      {!isMobileMenuToggled && !isNonMobileScreens && (
        <Box
          sx={{
            position: 'fixed',
            right: '0',
            bottom: '0',
            height: '100%',
            zIndex: '10',
            maxWidth: '500px',
            minWidth: '300px',
            background: alt,
            padding: '1rem',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* CLOSE ICON */}
          <Box display='flex' justifyContent='flex-end'>
            <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <Flex display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3rem'>
            <IconButton onClick={() => dispatch(setMode())} sx={{ fontSize: '25px' }}>
              {theme.palette.mode === 'dark' ? (
                <Tooltip title='Light mode' placement='bottom'>
                  <LightMode sx={{ fontSize: '25px' }} />
                </Tooltip>
              ) : (
                <Tooltip title='Dark mode' placement='bottom'>
                  <DarkMode sx={{ color: 'black', fontSize: '25px' }} />
                </Tooltip>
              )}
            </IconButton>
            <Tooltip title='Chat' placement='bottom' onClick={() => navigate('/chat')}>
              <Message sx={{ fontSize: '25px' }} />
            </Tooltip>
            <PopupState variant="popper" popupId="demo-popup-popper" >
              {(popupState) => (
                <div>
                  {notifications.length ? (
                    <Badge color="info" badgeContent={notifications.length}>
                      <Notifications sx={{ fontSize: '25px' }} {...bindToggle(popupState)} />
                    </Badge>
                  ) : (
                    <Notifications sx={{ fontSize: '25px' }} {...bindToggle(popupState)} />

                  )}

                  <Popper {...bindPopper(popupState)} transition >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                          {notifications.map((notification: any, index: any) => (
                            <Typography sx={{ p: 2 }}><Button onClick={() => handleRemoveNotification(index)} variant='text' sx={{ color: 'black',  textTransform: 'none' }} >{notification}</Button></Typography>
                          ))}
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </div>
              )}
            </PopupState>
            <FormControl sx={{ component: 'div' }}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: light,
                  width: '150px',
                  borderRadius: '0.25rem',
                  p: '0.25rem 1rem',
                  '& .MuiSvgIcon-root': {
                    pr: '0.25rem',
                    width: '3rem',
                  },
                  '& .MuiSelect-select:focus': {
                    backgroundColor: light,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
            
                  <Button variant='text' sx={{color:'black'}} onClick={() => navigate(`/profile/${user._id}`)}>{fullName}</Button>
                </MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Select>
            </FormControl>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
