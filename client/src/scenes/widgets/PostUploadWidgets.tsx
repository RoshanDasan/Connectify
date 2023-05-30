import React, { useState, useEffect } from 'react';
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

const PostUploadWidget = (picturePath: any) => {

  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [post, setPost] = useState('');
  const { palette } = useTheme();
  const { _id, userName } = useSelector((state: any) => state.user);
  const token = useSelector((state: any) => state.token);
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  const handlePost = async () => {

    const formData = new FormData();
    formData.append('userId', _id);
    formData.append('userName', userName);
    formData.append('description', post);
    if (image) {
      formData.append('image', image);
      formData.append('picturePath', image.name);
    }
    uploadPost(token, formData);
    setImage(null);
    setPost('');
    window.location.reload()
  };
  return (

    <WidgetWraper  >
      <Flex gap='1.5rem' >
      <Avatar alt={userName} src={picturePath} />
        <InputBase
          placeholder='Enter your thoughts'
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: '100%',
            border: '2px solid darkgray',
            backgroundColor: 'whitesmoke',
            borderRadius: '2rem',
            padding: '.5rem 1.5rem',
          }}
        />
      </Flex>
      {isImage && (
        <Box border='1px solid black' borderRadius='5px' mt='1rem' p='1rem'>
          <Dropzone
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <Flex>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p='1rem'
                  width='100%'
                  sx={{ '&:hover': { cursor: 'pointer' } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <Flex alignItems='center'>
                      <Typography>{image.name}</Typography>
                      <EditOutlined fontSize='small' />
                    </Flex>
                  )}
                </Box>
                {image && (
                  <IconButton onClick={() => setImage(null)} sx={{ width: '15%' }}>
                    <DeleteOutlined fontSize='small' />
                  </IconButton>
                )}
              </Flex>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: '1.25rem 0' }} />
      <Flex justifyContent='space-between'>
        <Flex gap='0.25rem' onClick={() => setIsImage(!isImage)}>
          <Tooltip title='Image' placement='top' sx={{cursor:'pointer'}}>
            <ImageOutlined fontSize='small' />
          </Tooltip>
        </Flex>

        {isNonMobileScreens ? (
          <>
            <Flex gap='0.25rem'>
              <Tooltip title='Clip' placement='top'>
                <GifBoxOutlined fontSize='small' sx={{cursor:'pointer'}} />
              </Tooltip>
            </Flex>

            <Flex gap='0.25rem'>
              <Tooltip title='Attachment' placement='top'>
                <AttachFileOutlined fontSize='small' sx={{cursor:'pointer'}} />
              </Tooltip>
            </Flex>

            <Flex gap='0.25rem'>
              <Tooltip title='Audio' placement='top'>
                <MicOutlined fontSize='small'  sx={{cursor:'pointer'}}/>
              </Tooltip>
            </Flex>
          </>
        ) : (
          <Flex gap='0.25rem'>
            <Tooltip title='More' placement='top'>
              <MoreHorizOutlined fontSize='small'  sx={{cursor:'pointer'}}/>
            </Tooltip>
          </Flex>
        )}
        <Button
          disabled={!post}
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
    </WidgetWraper>
  );
};

export default PostUploadWidget;
