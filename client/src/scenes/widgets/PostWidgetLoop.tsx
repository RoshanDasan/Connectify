import React, { useState } from 'react';
import { ChatBubbleOutlineOutlined, FavoriteOutlined, FavoriteBorderOutlined, DeleteOutlined, Send, VolumeOffOutlined, VolumeUpOutlined } from "@mui/icons-material";
import { Box, Button, CircularProgress, Divider, IconButton, TextField, Typography } from "@mui/material";
import Flex from "../../components/DisplayFlex";
import PostHeader from '../../components/PostHeader';
import WidgetWraper from "../../components/WidgetWraper";
import { useSelector } from 'react-redux';
import { likePost, useReplyComment } from '../../api/apiConnection/postConnection';
import { postComment, getPostById, deleteComment } from '../../api/apiConnection/postConnection';
import CloseIcon from '@mui/icons-material/Close';

interface PostWidgetProps {
  id: string;
  userId: string;
  description: string;
  userName: string;
  image: string;
  video: string;
  likes: any[];
  commentList: any[];
  click: any;
  globalClick: any;
}

const PostWidget: React.FC<PostWidgetProps> = ({ id, userId, description, userName, image, video, likes, commentList, globalClick }: PostWidgetProps) => {
  const [isComment, setIsComment] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [reply, setReply]: any = useState({})
  const token: string = useSelector((state: any) => state.token);
  const user: any = useSelector((state: any) => state.user._id);
  const { name }: any = useSelector((state: any) => state.user);
  const [isLike, setIsLike] = useState(likes.includes(user));
  const [likecount, setLikecount] = useState(likes.length);
  const [showReplyComment, setShowReplyComment]: any = useState({ status: false, index: -1 })

  const handleLike = async (id: string, userId: string) => {
    likePost(id, userId, token);

    if (isLike) {
      setLikecount((prevCount: any) => prevCount - 1);
    } else {
      setLikecount((prevCount: any) => prevCount + 1);
    }

    setIsLike((prevIsLike) => !prevIsLike);
  };

  const submitHandle = async () => {
    if (comment && !comment.match(/^\s/)) {
      if (reply.userId) {
        await useReplyComment(id, reply.userId, reply.comment, comment)
        setReply({})
        globalClick()
      } else {
        await postComment(id, user, `${name} : ${comment}`, token);
        const response: any = await getPostById(id, token);
        const { comments } = response.data.post;
        setComments(comments);
        globalClick()
      }
      setComment('');
      
    } else {
    }
  };

  const handleCommentView = async () => {
    const response: any = await getPostById(id, token);
    const { comments } = response.data.post;
    setComments(comments);
    setIsComment((prevState) => !prevState);
    globalClick()
  };

  const handleDelete = async (index: number) => {
    deleteComment(id, index, token);
    const response: any = await getPostById(id, token);
    const { comments } = response.data.post;
    setComments(comments);
    handleCommentView();
    globalClick()
  };
  const replyComment = (comment: any, userId: string) => {
    const splitted = comment.split(':')
    const name = splitted[0].slice(0, splitted[0].length - 1)
    setReply({ name: `@${name}`, userId, comment })
    globalClick()
  }

  const VideoPlayer = () => {
    const [muted, setMuted] = useState(true);
    const toggleMute = () => {
      setMuted((prevState) => !prevState);
    };

    return (
      <div style={{ position: 'relative' }}>
        {video ? (
          <video
            src={video}

            width="100%"
            style={{ borderRadius: '0.75rem', marginTop: '0.75rem' }}
            autoPlay
            loop
            muted={muted}
          >
            <p>Your browser does not support the video tag.</p>
          </video>

        ) : (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>

        )}

        <button
          style={{
            position: 'absolute',
            top: '20px',
            right: '10px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={toggleMute}
        >
          {muted ? < VolumeOffOutlined /> : <VolumeUpOutlined />}
        </button>
      </div>
    );
  };

  return (
    <WidgetWraper width='30rem'>
      <PostHeader postId={id} name={userName} image={image} video={video} friendId={userId} buttonClick={globalClick} />

      <Typography sx={{ mt: '1rem' }}>{description}</Typography>

      {image && (
        <img
          src={image}
          alt="img"
          width='100%'
          loading='lazy'
          style={{ borderRadius: '0.75rem', marginTop: '0.75rem' }}
        />
      )}

      {video && <VideoPlayer />}

      <Flex mt='0.25rem'>
        <Flex gap='1rem'>
          <Flex gap='0.3rem'>
            <IconButton onClick={() => handleLike(id, user)}>
              {isLike ? <FavoriteOutlined sx={{ color: 'red' }} /> : <FavoriteBorderOutlined />}
            </IconButton>
            <Typography>{likecount}</Typography>

          </Flex>
          <Flex gap='0.3rem'>
            <IconButton onClick={() => handleCommentView()}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{commentList.length}</Typography>
          </Flex>
        </Flex>
      </Flex>

      {isComment && (
        <Box mt="0.5rem" bgcolor="#f5f5f5" borderRadius="8px" padding="1rem">
          {comments.map(({ comment, userId, reply }: any, index) => (
            <React.Fragment key={index}>
              <Box>
                <Divider />
                <Flex alignItems="center">
                  {/* Add user avatar or profile picture here */}
                  <div>
                    <Typography
                      sx={{
                        "&:hover": {
                          cursor: "pointer",
                        },
                        m: "0.5rem 0",
                        pl: "1rem",
                        // Add Instagram-like typography styles here
                      }}
                      color="black"
                    >
                      {comment}
                    </Typography>
                    <p
                      onClick={() =>
                        setShowReplyComment((prevState: any) => ({
                          ...prevState,
                          [index]: !prevState[index],
                        }))
                      }
                      style={{ cursor: 'pointer' }}
                    >
                      Reply comments
                    </p>
                    {showReplyComment[index] && (
                      reply.map((replies: any, replyIndex: number) => (
                        <>
                        <Divider />
                        <p key={replyIndex}>{replies.reply}</p>
                        </>
                      ))
                    )}
                  </div>
                  <div>
                    <Button
                      variant="text"
                      sx={{ color: "black" }}
                      onClick={() => replyComment(comment, userId)}
                    >
                      Reply
                    </Button>
                    {userId === user && (
                      <IconButton size="small" onClick={() => handleDelete(index)}>
                        <DeleteOutlined />
                      </IconButton>
                    )}
                  </div>
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
              label={reply.name ? reply.name : 'Add a comment'}
              size="small"

              value={comment}
              onChange={(e) => setComment(e.target.value)}

            />
            {reply.name && <IconButton onClick={() => setReply({})}>
              <CloseIcon />
            </IconButton>}



            <IconButton onClick={submitHandle}>
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
