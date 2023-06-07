import { useState, useEffect } from 'react';
import {
  ChatBubbleOutlineOutlined,
  FavoriteOutlined,
  FavoriteBorderOutlined,
  Share,
  DeleteOutlined,
  Send
} from "@mui/icons-material";
import { Box, Divider, IconButton, TextField, Typography } from "@mui/material";
import Flex from "../../components/DisplayFlex";
import PostHeader from '../../components/PostHeader';
import WidgetWraper from "../../components/WidgetWraper";
import { useSelector } from 'react-redux';
import { likePost } from '../../api/apiConnection/postConnection';
import React from 'react';
import { postComment, getPostById, deleteComment } from '../../api/apiConnection/postConnection';

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
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const token: string = useSelector((state: any) => state.token);
  const user: any = useSelector((state: any) => state.user._id);
  const { name }: any = useSelector((state: any) => state.user);

  const handleLike = async (id: string, userId: string) => {
    const liked = likePost(id, userId, token);
    setIsLike((prevState) => !prevState);
    click()
  };

  const submitHandle = async () => {
    if (comment && !comment.match(/^\s/)) {
      
      const postCommentResult: any = await postComment(id, user, `${name} : ${comment}`, token)
      
      setComment('')
      const response: any = await getPostById(id, token)
      const { comments } = response.data.post
      setComments(comments)
    } else {
      console.log('no commentss');

    }



  }

  const handleCommentView = async () => {


    const response: any = await getPostById(id, token)
    const { comments } = response.data.post
    setComments(comments)
    setIsComment(() => !isComment)
  }

  const handleDelete = async (index: number) => {
    const deleteResponse: any = deleteComment(id, index, token)
    const response: any = await getPostById(id, token)
    const { comments } = response.data.post
    setComments(comments)


  }

  useEffect(() => {
    setIsLike(() => !isLike)

  }, [click])



  return (
    <WidgetWraper m='2rem 0' width='30rem'>
      <PostHeader postId={id} name={userName} image={image} friendId={userId} buttonClick={globalClick} />

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
            <IconButton onClick={() => handleCommentView()}>
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
        <Box mt="0.5rem" bgcolor="#f5f5f5" borderRadius="8px" padding="1rem">
          {comments.map(({ comment }, index) => (
            <React.Fragment key={index}>
              <Box>
                <Divider />
                <Flex alignItems="center">
                  {/* Add user avatar or profile picture here */}
                  <Typography
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                      },
                      m: "0.5rem 0",
                      pl: "1rem",
                      // Add Instagram-like typography styles here
                    }}
                  >
                    {comment}
                  </Typography>
                  <IconButton size="small" onClick={() => handleDelete(index)}>
                    {/* Use an Instagram-like delete button icon */}
                    <DeleteOutlined />
                  </IconButton>
                </Flex>
              </Box>
              <Divider />
            </React.Fragment>
          ))}

          <Box display="flex" alignItems="center" mt="0.5rem">
            {/* Add user avatar or profile picture here */}
            <TextField
              variant="outlined"
              fullWidth
              label="Add a comment..."
              size="small"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            // Add Instagram-like input field styles here
            />
            <IconButton onClick={() => submitHandle()
            }>

              <Send />
            </IconButton>
          </Box>
        </Box>

      )}
      <Divider sx={{ marginTop: '4rem' }} />
    </WidgetWraper>
  );
};

export default PostWidget;
