import { Avatar, Box, IconButton, Typography } from "@mui/material";
import Flex from "./DisplayFlex";
import { useSelector } from "react-redux";
import { followUser } from "../api/apiConnection/userConnection";
import { setFollower } from "../state";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
const Friend = ({ friendId, userName, handleshowFreind, onButtonClick }: any) => {
  const id = useSelector((state:any) => state.user._id)
  const token = useSelector((state:any) => state.token)
  const dispatch = useDispatch();

  const setIsFriend = async (id: string, friendId: string) => {
    console.log(id);
    const response = await followUser(id, friendId, token)
    console.log(response?.data.friend,'follower responseee');
    dispatch(setFollower({
      followers:response?.data.friend._id
    }))
    handleshowFreind()
    onButtonClick()
    

  }

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
            {userName}
          </Typography>
        </Box>
      </Flex>
      <IconButton onClick={() => setIsFriend(id, friendId)}>

        <Typography variant="h6" color={'blue'}>Follow</Typography>

      </IconButton>
    </Flex>
  );
};

export default Friend;
