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
  Alert,
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
import 'react-image-crop/dist/ReactCrop.css';
import { storage } from '../../api/googleAuth/GoogleAuth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

interface Props {
  onButtonClick: () => void;
}

const PostUploadWidget: React.FC<Props> = ({ onButtonClick }) => {
  const [isImage, setIsImage] = useState(false);
  const [dp, setDp] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [post, setPost] = useState('');
  const [valid, setValid] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [alert, setAlert] = useState('')
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
      setIsUploading(false);
    }, 4000);

    const formData = new FormData();
    formData.append('userId', _id);
    formData.append('userName', userName);
    formData.append('description', post);
    if (image) {
      const imageRef = ref(storage, `posts/${image.name + v4()}`);

      // Check if the image file is a video by checking the file extension
      const isVideo = image.name.toLowerCase().endsWith('.mp4');

      if (isVideo) {
        // Upload the video file
        await uploadBytes(imageRef, image);

        // Get the download URL of the uploaded video
        const videoUrl = await getDownloadURL(imageRef);

        formData.append('video', videoUrl);
        formData.append('videoPath', image.name);
      } else {
        // Upload the image file (assuming it's not a video)
        await uploadBytes(imageRef, image);

        // Get the download URL of the uploaded image
        const imageUrl = await getDownloadURL(imageRef);

        formData.append('image', imageUrl);
        formData.append('picturePath', image.name);
      }
    }

    const upload = await uploadPost(token, formData);

    dispatch(setUpdatePost({ posts: upload.newPost }));
    setImage(null);
    setPost('');
    setIsUploading(false);
    onButtonClick();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost(e.target.value);
    if (/^\s*$/.test(e.target.value)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
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



  return (
    <>
      {alert.length > 0 && <Alert severity="error">{alert}</Alert>}
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
                onChange={handleInput}
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
                onChange={handleInput}
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

            <Dropzone
              multiple={true}
              onDrop={(acceptedFiles, rejectedFiles) => {
                console.log(acceptedFiles[0].name.endsWith('mp4'), 'acc');
                console.log(rejectedFiles, 'rej');
                if (acceptedFiles[0] && (acceptedFiles[0] && (acceptedFiles[0].name.endsWith('.jpg') || acceptedFiles[0].name.endsWith('.png') || acceptedFiles[0].name.endsWith('.mp4')))) {
                  setImage(acceptedFiles[0])
                  setAlert('')
                } else {
                  setAlert('Please select a valid file')
                }
              }
              }
            >
              {({ getRootProps, getInputProps }: any) => (
                <Flex>
                  <Box
                    {...getRootProps()}
                    sx={{ '&:hover': { cursor: 'pointer' } }}
                  >
                    <TextField {...getInputProps()} />

                    {!image ? (
                      <p>Upload image or video here</p>
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

          
          </Box>
        )}

        {isUploading && <LinearProgress variant="determinate" value={progress} />}
        {!valid && <Typography variant="body2">Please enter a post</Typography>}
        <Divider sx={{ mt: '1rem' }} />
      </WidgetWraper>
    </>

  );
};

export default PostUploadWidget;
