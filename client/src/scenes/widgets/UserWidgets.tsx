import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../../api/apiConnection/userConnection';
import { Box, Typography, Divider, useTheme, Tooltip, Avatar } from '@mui/material';
import { ManageAccountsOutlined } from '@mui/icons-material';
import Flex from '../../components/DisplayFlex';
import WidgetWraper from '../../components/WidgetWraper';

interface UserWidgetProps {
  userId: string;
  picturePath: string;
}

const UserWidget: React.FC<UserWidgetProps> = ({ userId, picturePath }) => {
  const [user, setUser] = useState<any>(null);
  const pellet = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.token);
  const dark = pellet.palette.text.primary;
  const medium = pellet.palette.text.secondary;


  const getUsers = async () => {
    try {
      const userResponse: any = await getUser(userId, token);
      setUser(userResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (!user) {
    return null;
  }

  const { userName, followers } = user;

  return (
    <WidgetWraper>
      {/* First Row */}
      <Flex gap='0.5rem' pb='1.1rem' onClick={() => navigate(`/profile/${userId}`)}>
        <Flex gap='1rem' alignItems='center'>
          <Avatar alt={userName} src={picturePath} />
          <Box>
            <Typography variant='h4' color={dark} fontWeight='bold' sx={{ cursor: 'pointer' }}>
              {userName}
            </Typography>
            <Typography color={medium} variant='subtitle2'>
              {followers} followers
            </Typography>
          </Box>
        </Flex>
        <Tooltip title='Profile settings' placement='bottom'>
          <ManageAccountsOutlined sx={{ fontSize: 24, cursor: 'pointer' }} />
        </Tooltip>
      </Flex>

      <Divider />

      {/* Second Row */}
      <Box p='1rem 0'>
        <Flex mb='0.5rem' alignItems='center'>
          <Typography color={medium}>Who's viewed your profile</Typography>
          <Typography fontWeight='bold'>50</Typography>
        </Flex>
        <Flex alignItems='center'>
          <Typography color={medium}>Impressions of your post</Typography>
          <Typography fontWeight='bold'>Good</Typography>
        </Flex>
      </Box>

      <Divider />

      {/* Fourth Row */}
      {/* <Box p='1rem 0'>
        <Typography fontSize='1rem' fontWeight='bold' mb='1rem'>
          Social Profiles
        </Typography>

        <Flex gap='1rem' alignItems='center' mb='0.5rem'>
          <img src="../assets/twitter.png" alt="twitter" />
          <Box>
            <Typography fontWeight='bold'>Twitter</Typography>
            <Typography color={medium}>Social Network</Typography>
          </Box>
          <EditOutlined fontSize='small' />
        </Flex>

        <Flex gap='1rem' alignItems='center'>
          <img src="../assets/linkedin.png" alt="linkedin" />
          <Box>
            <Typography fontWeight='bold'>LinkedIn</Typography>
            <Typography color={medium}>Network Platform</Typography>
          </Box>
          <EditOutlined fontSize='small' />
        </Flex>
      </Box> */}
    </WidgetWraper>
  );
};

export default UserWidget;
