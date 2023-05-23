import { ManageAccountsOutlined, EditOutlined, LocationOnOutlined, WorkOutlineOutlined } from "@mui/icons-material";
import { Box, Typography, Divider, useTheme, Tooltip } from "@mui/material";
import UserImage from "../../components/UserImage";
import Flex from "../../components/DisplayFlex";
import WidgetWraper from "../../components/WidgetWraper";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../api/apiConnection/userConnection";

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
    const main = pellet.palette.primary.main;

    const getUsers = async () => {
        try {
          const userResponse: any = await getUser(userId, token.token);
          
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

    const {
        name,
        userName,
        email,
        number,
        password,
        isadmin,
        followers,
        following,
        posts,
    } = user;

    return (
        <WidgetWraper>
            {/* First Row */}
            <Flex
                gap='0.5rem'
                pb='1.1rem'
                onClick={() => navigate(`/profile/${userId}`)}
            >
                <Flex gap='1rem'>
                    {/* <UserImage image={picturePath} /> */}
                    
                    <Box>
                        <Typography
                            variant='h4'
                            color={dark}
                            fontWeight='500'
                            sx={{
                                "&:hover": {
                                    color: 'green',
                                    cursor: 'pointer'
                                }
                            }}
                        >
                            {userName}
                        </Typography>
                        <Typography >{followers}</Typography>
                    </Box>
                </Flex>
                <Tooltip title="Profile settings" placement="bottom">
                <ManageAccountsOutlined />
                </Tooltip>
            </Flex>

            <Divider />

            {/* Second Row */}
            <Box p='1rem 0'>
                <Box display='flex' alignItems='center' gap='1rem'>
                    <LocationOnOutlined fontSize="large" sx={{ "&:hover": { cursor: "pointer", color: "green" } }} />
                    <Typography color={medium}>Chalakudi</Typography>
                </Box>
                <Box display='flex' alignItems='center' gap='1rem'>
                    <LocationOnOutlined fontSize="large"  sx={{ "&:hover": { cursor: "pointer", color: "green" } }} />
                    <Typography color={medium}>Thrissur</Typography>
                </Box>
            </Box>

            <Divider />

            {/* Third Row */}
            <Box p="1rem 0">
                <Flex mb="0.5rem">
                    <Typography color={medium}>Who's viewed your profile</Typography>
                    <Typography  fontWeight="500">
                        50
                    </Typography>
                </Flex>
                <Flex>
                    <Typography color={medium}>Impressions of your post</Typography>
                    <Typography  fontWeight="500">
                        good
                    </Typography>
                </Flex>
            </Box>

            <Divider />

            {/* Fourth Row */}
            <Box p="1rem 0">
                <Typography fontSize="1rem"  fontWeight="500" mb="1rem">
                    Social Profiles
                </Typography>

                <Flex gap="1rem" mb="0.5rem">
                    <Flex gap="1rem">
                        <img src="../assets/twitter.png" alt="twitter" />
                        <Box>
                            <Typography  fontWeight="500">
                                Twitter
                            </Typography>
                            <Typography color={medium}>Social Network</Typography>
                        </Box>
                    </Flex>
                    <EditOutlined  />
                </Flex>

                <Flex gap="1rem">
                    <Flex gap="1rem">
                        <img src="../assets/linkedin.png" alt="linkedin" />
                        <Box>
                            <Typography  fontWeight="500">
                                Linkedin
                            </Typography>
                            <Typography color={medium}>Network Platform</Typography>
                        </Box>
                    </Flex>
                    <EditOutlined  />
                </Flex>
            </Box>
        </WidgetWraper>
    );
};

export default UserWidget;
