import { useState } from 'react';
import {
  ChatBubbleOutlineOutlined,
  FavoriteOutlined,
  FavoriteBorderOutlined,
  Share
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import Flex from "../../components/DisplayFlex";
import Friend from "../../components/Friend";
import WidgetWraper from "../../components/WidgetWraper";

const PostWidget = ({ postId, postUserId, name, description, image, likes, comments }: any) => {
  console.log(postId, postUserId, name, description, image, likes, comments,'datasss');
  
  const [isLike, setIsLike] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const picturePath = image;


  return (
    <WidgetWraper m='2rem 0' width='30rem'  >
      <Friend 
        friendId='1'
        name={name}
        subtitle='Chalakudi'
        userPicturePath=''
      />
     
      <Typography sx={{ mt: '1rem' }}>
        {description}
      </Typography>
      {picturePath && (
        <img 
          src={`http://localhost:5000/uploads/${image}`}
          alt="img" 
          width='100%'
          style={{ borderRadius: '0.75rem', marginTop: '0.75rem' }}
        />
      )}
      <Flex mt='0.25rem'>
        <Flex gap='1rem'>
          <Flex gap='0.3rem'>
            <IconButton onClick={() => setIsLike(!isLike)}>
              {isLike ? (
                <FavoriteOutlined sx={{ color: 'red' }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{isLike ? 11 : 10}</Typography>
          </Flex>
          <Flex gap='0.3rem'>
            <IconButton onClick={() => setIsComment(!isComment)} >
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>1</Typography>
          </Flex>
        </Flex>
        <IconButton>
          <Share />
        </IconButton>
      </Flex>
      {isComment && (
        <Box mt='0.5rem'>
          <Box>
            <Divider />
            <Typography>
              Nice
            </Typography>
          </Box>
          <Divider />
        </Box>
      )}
      <Divider sx={{marginTop: '4rem'}} />
    </WidgetWraper>
    
  );
};

export default PostWidget;
