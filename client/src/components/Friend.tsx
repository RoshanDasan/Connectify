import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import Flex from "./DisplayFlex";
import UserImage from "./UserImage";

// eslint-disable-next-line react/prop-types
const Friend = ({ name, subtitle, userPicturePath }: any) => {
 

  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.background.paper
  const medium = palette.background.paper


const [isFriend,setIsFriend] = useState(false)

  return (
    <Flex m='0.5rem 0 1.5rem 0' >
      <Flex gap="1rem">
        {/* <UserImage image='../assets/photo.jpg' size="55px" /> */}
        <Avatar />
        <Box
        
        >
          <Typography
           
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: 'blue',
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          
          <Typography fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </Flex>
      <IconButton onClick={()=>setIsFriend(!isFriend)}
       
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }}  />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </Flex>
  );
};

export default Friend;
