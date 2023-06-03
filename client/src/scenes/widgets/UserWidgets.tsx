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
  data: any
}

const UserWidget: React.FC<UserWidgetProps> = ({ userId, picturePath, data  }: any) => {
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
      throw error
    }
  };

  useEffect(() => {
    getUsers();
  }, [data]);

  if (!user) {
    return null;
  }
  

  const { userName, followers, following } = user;

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
              {followers.length} followers
            </Typography>
            <Typography color={medium} variant='subtitle2'>
              {following.length} following
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

    </WidgetWraper>
  );
};

export default UserWidget;
