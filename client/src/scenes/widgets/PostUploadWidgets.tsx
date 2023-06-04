import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
  Tooltip,
  Avatar,
  LinearProgress,
} from '@mui/material';
import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from '@mui/icons-material';
import Flex from '../../components/DisplayFlex';
import Dropzone from 'react-dropzone';

import WidgetWraper from '../../components/WidgetWraper';
import { uploadPost } from '../../api/apiConnection/postConnection';
import { setUpdatePost } from '../../state';
import { getUser } from '../../api/apiConnection/userConnection';

const PostUploadWidget = ({ onButtonClick }: any) => {
  const [isImage, setIsImage] = useState(false);
  const [dp, setDp] = useState('');
  const [image, setImage] = useState(null);
  const [post, setPost] = useState('');
  const [valid, setValid] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const { palette } = useTheme();
  const { _id, userName } = useSelector((state: any) => state.user);
  const token = useSelector((state: any) => state.token);
  const mode = useSelector((state: any) => state.mode);
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      const { dp } = await getUser(_id, token);
      setDp(dp);
    };
    getUserData();
  }, [_id, token]);

  const handlePost = async () => {
    setIsUploading(true);

    const formData = new FormData();
    formData.append('userId', _id);
    formData.append('userName', userName);
    formData.append('description', post);
    if (image) {
      formData.append('image', image);
      formData.append('picturePath', image.name);
    }
    console.log(formData,'dataa');
    
    const upload = await uploadPost(token, formData);

    dispatch(setUpdatePost({ posts: upload.newPost }));
    setImage(null);
    setPost('');

    setIsUploading(false);
    onButtonClick();
  };

  const handleInput = (e: any) => {
    setPost(e.target.value)
    if (/^\s*$/.test(e.target.value)) {
      setValid(true)

    } else {
      setValid(false)
    }
  }

  return (
    <WidgetWraper>
      <Flex gap="1.5rem">
        {dp ? (
          <div className="profile-picture">
            <Avatar alt={userName} src={`http://localhost:5000/uploads/${dp}`} />
          </div>
        ) : (
          <Avatar alt={userName} />
        )}

        {mode === 'dark' ? (
          <InputBase
            placeholder="Enter your thoughts"
            onChange={(e) => handleInput(e)}
            value={post}
            sx={{
              width: '100%',
              border: '2px solid black',
              color: 'black',
              backgroundColor: 'white',
              borderRadius: '2rem',
              padding: '.5rem 1.5rem',
            }}
          />
        ) : (
          <InputBase
            placeholder="Enter your thoughts"
            onChange={(e) => handleInput(e)}
            value={post}
            sx={{
              width: '100%',
              border: '2px solid black',
              color: 'black',
              borderRadius: '2rem',
              padding: '.5rem 1.5rem',
            }}
          />
        )}
      </Flex>

      {isImage && (
        <Box border="1px solid black" borderRadius="5px" mt="1rem" p="1rem">
          <Dropzone multiple={false} onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}>
            {({ getRootProps, getInputProps }) => (
              <Flex>
                <Box
                  {...getRootProps()}
                  
                
                  sx={{ '&:hover': { cursor: 'pointer' } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <Flex alignItems="center">
                      <Typography>{image.name}</Typography>
                      <EditOutlined fontSize="small" />
                    </Flex>
                  )}
                </Box>
                {image && (
                  <IconButton onClick={() => setImage(null)} sx={{ width: '15%' }}>
                    <DeleteOutlined fontSize="small" />
                  </IconButton>
                )}
              </Flex>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: '1.25rem 0' }} />
      <Flex justifyContent="space-between">
        <Flex gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <Tooltip title="Image" placement="top" sx={{ cursor: 'pointer' }}>
            <ImageOutlined fontSize="small" />
          </Tooltip>
        </Flex>

        {isNonMobileScreens ? (
          <>
            <Flex gap="0.25rem">
              <Tooltip title="Clip" placement="top">
                <GifBoxOutlined fontSize="small" sx={{ cursor: 'pointer' }} />
              </Tooltip>
            </Flex>

            <Flex gap="0.25rem">
              <Tooltip title="Attachment" placement="top">
                <AttachFileOutlined fontSize="small" sx={{ cursor: 'pointer' }} />
              </Tooltip>
            </Flex>

            <Flex gap="0.25rem">
              <Tooltip title="Audio" placement="top">
                <MicOutlined fontSize="small" sx={{ cursor: 'pointer' }} />
              </Tooltip>
            </Flex>
          </>
        ) : (
          <Flex gap="0.25rem">
            <Tooltip title="More" placement="top">
              <MoreHorizOutlined fontSize="small" sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Flex>
        )}
        <Button
          disabled={isUploading || valid}
          onClick={handlePost}
          sx={{
            color: 'white',
            backgroundColor: 'darkgray',
            borderRadius: '3rem',
          }}
        >
          POST
        </Button>
      </Flex>

      {isUploading && <LinearProgress sx={{ marginTop: '1rem' }} />}
    </WidgetWraper>
  );
};

export default PostUploadWidget;
