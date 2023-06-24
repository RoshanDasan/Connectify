import { Avatar, Box, IconButton, Typography } from "@mui/material";
import Flex from "./DisplayFlex";
import { useSelector } from "react-redux";
import { sendRequest } from "../api/apiConnection/userConnection";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Friend = ({ friendId, image, userName, handleshowFreind, onButtonClick }: any) => {

  const { _id, requested } = useSelector((state: any) => state.user)

  const navigate = useNavigate()
  const [isRequested, setIsRequested] = useState(requested.some((request: any) => request.id === friendId))

  const sendFriendRequest = async (id: string, friendId: string) => {
    const response: any = await sendRequest(id, friendId)

    console.log(response, 'requse send');
    toast.success(response)
    setIsRequested(true)
    handleshowFreind()
    onButtonClick()

  }
  const cancelFriendRequest = async(id: string, friendId: string) => {
    setIsRequested(false)
    const response: any = await sendRequest(id, friendId);
    toast.success(response)
    console.log(response),'canceled';
    
  }

  return (

    <Flex m='0.5rem 0 1.5rem 0' >
      <Flex gap="1rem">
        {/* <UserImage image='../assets/photo.jpg' size="55px" /> */}
        {image ? (

          <div className="profile-picture">
            <Avatar alt={userName} src={image} />
          </div>
        ) : (
          <Avatar alt={userName} />
        )}
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
            onClick={(() => navigate(`/profile/${friendId}`))}
          >
            {userName}
          </Typography>
        </Box>
      </Flex>
      {isRequested ? (
        <IconButton onClick={() => cancelFriendRequest(_id, friendId)}>
          <Typography variant="h6" color={'blue'}>Requested</Typography>
        </IconButton>
      ) : (
        <IconButton onClick={() => sendFriendRequest(_id, friendId)}>
          <Typography variant="h6" color={'blue'}>Follow</Typography>
        </IconButton>
      )}

    </Flex>
  );
};

export default Friend;
