import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../../api/apiConnection/userConnection';
import {
  Box,
  Typography,
  Divider,
  useTheme,
  Tooltip,
  Avatar,
  Skeleton,
} from '@mui/material';
import { ManageAccountsOutlined } from '@mui/icons-material';
import Flex from '../../components/DisplayFlex';
import WidgetWraper from '../../components/WidgetWraper';

interface UserWidgetProps {
  userId: string;
  picturePath: string;
  data: any;
}

const UserWidget: React.FC<UserWidgetProps> = ({ userId, picturePath, data }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const pellet = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.token);
  const dark = pellet.palette.text.primary;
  const medium = pellet.palette.text.secondary;

  const getUsers = async () => {
    try {
      const userResponse: any = await getUser(userId, token);
      setUser(userResponse);
      setIsLoading(false);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getUsers();
  }, [data]);

  if (isLoading) {
    return (
      <WidgetWraper>
        {/* First Row Skeleton */}
        <Flex gap="0.5rem" pb="1.1rem">
          <div>
            <Flex>
              <Skeleton variant="circular" width={40} height={40} />
              <div>
                <Box ml={5}>
                  <Skeleton width={90} height={40} />
                  <Skeleton width={70} height={15} />
                  <Skeleton width={70} height={15} />

                </Box>

              </div>

            </Flex>


          </div>

          <Skeleton width={55} height={55} />


        </Flex>

      </WidgetWraper>
    );
  }

  const { userName, followers, following } = user;

  return (
    <WidgetWraper>
      {/* First Row */}
      <Flex gap="0.5rem" pb="1.1rem" onClick={() => navigate(`/profile/${userId}`)}>
        <Flex gap="1rem" alignItems="center">
          {user.dp ? (
            <div className="profile-picture">
              <Avatar alt={user.userName} src={`http://localhost:5000/uploads/${user.dp}`} />
            </div>
          ) : (
            <Avatar alt={user.userName} />
          )}
          <Box>
            <Typography variant="h4" color={dark} fontWeight="bold" sx={{ cursor: 'pointer' }}>
              {userName}
            </Typography>
            <Typography color={medium} variant="subtitle2">
              {followers.length} followers
            </Typography>
            <Typography color={medium} variant="subtitle2">
              {following.length} following
            </Typography>
          </Box>
        </Flex>
        <Tooltip title="Profile settings" placement="bottom">
          <ManageAccountsOutlined sx={{ fontSize: 24, cursor: 'pointer' }} />
        </Tooltip>
      </Flex>
    </WidgetWraper>
  );
};

export default UserWidget;
