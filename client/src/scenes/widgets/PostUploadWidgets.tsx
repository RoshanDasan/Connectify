import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Divider,
  Typography,
  InputBase,
  IconButton,
  Avatar,
  LinearProgress,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  EditOutlined,
  DeleteOutlined,
  CameraAltOutlined,
  Send,
} from '@mui/icons-material';
import Flex from '../../components/DisplayFlex';
import Dropzone from 'react-dropzone';
import WidgetWraper from '../../components/WidgetWraper';
import { uploadPost } from '../../api/apiConnection/postConnection';
import { setUpdatePost } from '../../state';
import { getUser } from '../../api/apiConnection/userConnection';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { storage } from '../../api/googleAuth/GoogleAuth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid'

const PostUploadWidget = ({ onButtonClick }: any) => {
  const [isImage, setIsImage]: any = useState(false);
  const [dp, setDp]: any = useState('');
  const [image, setImage]: any = useState(null);
  const [post, setPost]: any = useState('');
  const [valid, setValid]: any = useState(true);
  const [isUploading, setIsUploading]: any = useState(false);
  const [progress, setProgress]: any = React.useState(0);
  const [crop, setCrop]: any = useState({ aspect: 16 / 9 });
  const [croppedImage, setCroppedImage]: any = useState(null);
  const { _id, userName } = useSelector((state: any) => state.user);
  const token = useSelector((state: any) => state.token);
  const mode = useSelector((state: any) => state.mode);
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
    setTimeout(() => {
      setIsUploading(false)
      onButtonClick();
    }, 4000);


    const formData = new FormData();
    formData.append('userId', _id);
    formData.append('userName', userName);
    formData.append('description', post);
    if (image) {
      const imageRef = ref(storage, `posts/${image.name + v4()}`);
      await uploadBytes(imageRef, image);
  
      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(imageRef);
  
      formData.append('image', imageUrl);
      formData.append('picturePath', image.name);
    }

    const upload = await uploadPost(token, formData);

    dispatch(setUpdatePost({ posts: upload.newPost }));
    setImage(null);
    setPost('');
    setIsUploading(false)
  };

  const handleInput = (e: any) => {
    setPost(e.target.value)
    if (/^\s*$/.test(e.target.value)) {
      setValid(true)
    } else {
      setValid(false)
    }
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress: any) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleImageCrop = (imageDataUrl: any) => {
    setCroppedImage(imageDataUrl);
  };

  return (
    <WidgetWraper>
      <Flex gap="1.5rem">
        {dp ? (
          <div className="profile-picture">
            <Avatar alt={userName} src={dp} />
          </div>
        ) : (
          <Avatar alt={userName} />
        )}

        {mode === 'dark' ? (
          <>
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
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setIsImage(!isImage)}>
                    <CameraAltOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
            <IconButton onClick={handlePost} disabled={isUploading || valid}>
              <Send />
            </IconButton>
          </>
        ) : (
          <>
            <InputBase
              placeholder="Enter your thoughts"
              onChange={(e) => handleInput(e)}
              value={post}
              sx={{
                width: '100%',
                border: '2px solid black',
                color: 'black',
                borderRadius: '2rem',
                padding: '.5rem .2rem .5rem 1.5rem',
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setIsImage(!isImage)}>
                    <CameraAltOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
            <IconButton onClick={handlePost} disabled={isUploading || valid}>
              <Send />
            </IconButton>
          </>
        )}
      </Flex>

      {isImage && (
        <Box border="1px solid black" borderRadius="5px" mt="1rem" p="1rem">
          {!croppedImage && (
            <Dropzone
              multiple={false}
              onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
            >
              {({ getRootProps, getInputProps }: any) => (
                <Flex>
                  <Box
                    {...getRootProps()}
                    sx={{ '&:hover': { cursor: 'pointer' } }}
                  >
                    <TextField {...getInputProps()} />
                    {!image ? (
                      <p>Add Image Here</p>
                    ) : (
                      <Flex alignItems="center">
                        <Typography>{image.name}</Typography>
                        <EditOutlined fontSize="small" />
                      </Flex>
                    )}
                  </Box>
                  <CameraAltOutlined />

                  {image && (
                    <IconButton
                      onClick={() => setImage(null)}
                      sx={{ width: '15%' }}
                    >
                      <DeleteOutlined fontSize="small" />
                    </IconButton>
                  )}
                </Flex>
              )}
            </Dropzone>
          )}

          {image && !croppedImage && (
            <ReactCrop
              src={URL.createObjectURL(image)}
              crop={crop}
              onChange={(newCrop: any) => setCrop(newCrop)}
              onComplete={(cropData) => {
                const canvas = document.createElement('canvas');
                const imageElement = document.createElement('img');
                imageElement.src = URL.createObjectURL(image);
                imageElement.onload = () => {
                  canvas.width = cropData.width;
                  canvas.height = cropData.height;
                  const ctx: any = canvas.getContext('2d');
                  ctx.drawImage(
                    imageElement,
                    cropData.x,
                    cropData.y,
                    cropData.width,
                    cropData.height,
                    0,
                    0,
                    cropData.width,
                    cropData.height
                  );
                  const imageDataUrl = canvas.toDataURL('image/jpeg');
                  handleImageCrop(imageDataUrl);
                };
              }}
            />
          )}

          {croppedImage && (
            <Box mt="1rem">
              <img src={croppedImage} alt="Cropped" />
            </Box>
          )}
        </Box>
      )}

      <Divider sx={{ margin: '1.25rem 0' }} />

      {isUploading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress color="info" variant="determinate" value={progress} />
        </Box>
      )}
    </WidgetWraper>
  );
};

export default PostUploadWidget;
