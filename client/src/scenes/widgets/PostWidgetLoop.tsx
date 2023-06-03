import { useState, useEffect } from 'react';
import {
  ChatBubbleOutlineOutlined,
  FavoriteOutlined,
  FavoriteBorderOutlined,
  Share
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import Flex from "../../components/DisplayFlex";
import PostHeader from '../../components/PostHeader';
import WidgetWraper from "../../components/WidgetWraper";
import { useSelector } from 'react-redux';
import { likePost } from '../../api/apiConnection/postConnection';

interface PostWidgetProps {
  id: string;
  userId: string;
  description: string;
  userName: string;
  image: string;
  likes: any[];
  comments: any[];
  click: any;
  globalClick: any;
}

const PostWidget: React.FC<PostWidgetProps> = ({ id, userId, description, userName, image, likes, click, globalClick }: PostWidgetProps) => {
  
  const [isLike, setIsLike] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const token: string = useSelector((state: any) => state.token);
  const user: any = useSelector((state:any) => state.user._id);

  const handleLike = async (id: string, userId: string) => {
    const liked = likePost(id, userId, token);
    setIsLike((prevState) => !prevState);
    click()
  };

  useEffect(() => {
    setIsLike(() => !isLike)
    
  },[click])

  

  return (
    <WidgetWraper m='2rem 0' width='30rem'>
      <PostHeader name={userName} friendId={userId} buttonClick={globalClick} />

      <Typography sx={{ mt: '1rem' }}>{description}</Typography>
      {image && (
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
            <IconButton onClick={() => handleLike(id, user)}>
              {likes.includes(user) ? <FavoriteOutlined sx={{ color: 'red' }} /> : <FavoriteBorderOutlined />}
            </IconButton>
            <Typography>{likes.length}</Typography>
          </Flex>
          <Flex gap='0.3rem'>
            <IconButton onClick={() => setIsComment(!isComment)}>
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
            <Typography>Nice</Typography>
          </Box>
          <Divider />
        </Box>
      )}
      <Divider sx={{ marginTop: '4rem' }} />
    </WidgetWraper>
  );
};

export default PostWidget;
