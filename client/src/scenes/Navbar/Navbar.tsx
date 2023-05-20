import { useState } from 'react';
import { Box, IconButton, InputBase, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery } from '@mui/material';
import { Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { setMode, setLogout } from '../../state';
import { useNavigate } from 'react-router-dom';
import Flex from '../../components/DisplayFlex';

const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.token.user);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    const theme = useTheme();
    const light = theme.palette.background.paper
    const dark = theme.palette.secondary.dark;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.paper;

    const fullName = user.userName;
    const Logout = () => {
      dispatch(setLogout())
      navigate('/')
    }


    return (
        <Flex padding="1rem 6%" sx={{ background: alt }}>
            <Flex gap="1.75rem">
                <Typography fontWeight="bold" fontSize="clamp(1rem, 2rem, 2.25)" color="primary"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                            color: primaryLight,
                            cursor: "pointer",
                        }
                    }}
                >
                    Connectify
                </Typography>

                {isNonMobileScreens && (
                    <Flex sx={{ borderRadius: '9px', gap: '3rem', padding: '0.1rem 1.5rem' }}>
                        <InputBase placeholder='Search...' />
                        <IconButton>
                        <Tooltip title="Search user" placement="bottom">
                            <Search />
                            </ Tooltip >
                        </IconButton>
                    </Flex>


                )}
            </Flex>
            {isNonMobileScreens ? (
                <Flex gap="2rem">
                   <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === 'dark' ? (
                      <Tooltip title="Light mode" placement="bottom">
                        <LightMode sx={{ fontSize: '25px' }} />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Dark mode" placement="bottom">
                        <DarkMode sx={{ color: dark, fontSize: '25px' }} />
                      </Tooltip>
                    )}
                  </IconButton>
                    <Tooltip title="Chat" placement="bottom">

                    <Message sx={{ fontSize: "25px" }} />
                    </Tooltip>
                    <Tooltip title="Notification" placement="bottom">
                    <Notifications sx={{ fontSize: "25px" }} />
                    </Tooltip>

                    
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
                                <Typography>{fullName}</Typography>
                            </MenuItem>
                            <MenuItem 
                            onClick={Logout}>Log Out</MenuItem>
                        </Select>
                    </FormControl>

                </Flex>
            ) : (
                <IconButton
                onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
              >
                <Menu />
              </IconButton>
        

    )}

    {!isMobileMenuToggled && !isNonMobileScreens && (
          <Box sx={{   
          position:"fixed",
          right:"0",
          bottom:"0",
          height:"100%",
          zIndex:"10",
          maxWidth:"500px",
          minWidth:"300px",
         }}
       
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <Flex
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl sx={{ component: 'div' }}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: light,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: light,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </Flex>
        </Box>
    )}

        </Flex>


    )
}

export default Navbar
