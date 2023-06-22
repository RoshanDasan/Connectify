import { useEffect, useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Grid,
  Avatar,
  Alert,
} from '@mui/material';
import * as React from 'react';
import Sidebar from '../scenes/Sidebar/Sidebar';
import Navbar from '../scenes/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { getUser, useUpdateProfile } from '../api/apiConnection/userConnection';
import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { ToastContainer, toast } from 'react-toastify';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { storage } from '../api/googleAuth/GoogleAuth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid'

type FormValues = {
  bio: string;
  gender: string;
  city: string;
  date: any;
  file?: any; // Optional property to store the selected file
};

const EditProfile: React.FC = () => {
  const { id }: any = useParams();
  const updateProfileMutation = useUpdateProfile();
  const token = useSelector((state: any) => state.token);
  const [user, setUser] = useState<any>({});
  const [click, setClick] = useState(false);
  const [disable, setDisable] = useState(true);
  const [alert, setAlert] = useState('')

  const getDetails = async () => {
    const userDetails: any = await getUser(id, token);
    setUser(userDetails);
  };

  useEffect(() => {
    getDetails();
  }, [click]);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    maxSize: 1048576,
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0) setAlert('Maximum file size exceeded')
      if (acceptedFiles.length > 0) {
        if (acceptedFiles[0]?.name?.endsWith('jpg') || acceptedFiles[0]?.name?.endsWith('png')) {
          setFormValues((prevValues) => ({
            ...prevValues,
            file: acceptedFiles[0], // Store the selected file in the form values
          }));
          setAlert('')
        }else{
          setAlert('Select a valid image')
        }
      }

    },
  });
  const [formValues, setFormValues] = useState<FormValues>({
    file: '',
    bio: '',
    gender: '',
    city: '',
    date: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisable(false);
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };


  const handleDateChange = (date: any) => {
    setDisable(false);
    setFormValues((prevValues) => ({ ...prevValues, date: new Date(date) }));
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();


    const formData = new FormData();

    if (formValues.file) {
      const imageRef = ref(storage, `profile/${formValues.file.name + v4()}`);
      await uploadBytes(imageRef, formValues.file);

      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(imageRef);

      formData.append('file', imageUrl);
      formData.append('picturePath', formValues.file.name);
    }

    if (formValues.bio.trim() === '') {
      formData.append('bio', user.bio);
    } else {
      formData.append('bio', formValues.bio);
    }

    if (formValues.gender.trim() === '') {
      formData.append('gender', user.gender);
    } else {
      formData.append('gender', formValues.gender);
    }

    if (formValues.city.trim() === '') {
      formData.append('city', user.city);
    } else {
      formData.append('city', formValues.city);
    }

    const formattedDate = formValues.date ? formValues.date.toDateString() : '';
    formData.append('date', formattedDate);


    updateProfileMutation.mutate({ id, values: formData, token });
    setClick(!click);
    // toast.success('profile updated');
    setAlert('success')
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Sidebar />
        {alert.length > 0 && alert !== 'success' &&
          <Alert severity="error">{alert}</Alert>
        }
        {
          alert === 'success' &&  <Alert severity="success">Profile updated</Alert>
        }
        <Typography variant="h3" sx={{ paddingTop: '3rem', textAlign: 'left' }}>
          Edit Profile
        </Typography>

        <Box>
          <form onSubmit={handleSubmit}>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Box sx={{ margin: '2rem 2rem 2rem 5rem' }}>
                  {user.dp ? (
                    <div className="profile-picture">
                      <Avatar alt={user.userName} src={user.dp} />
                    </div>
                  ) : (
                    <Avatar alt={user.userName} />
                  )}
                </Box>
              </Grid>
              <Grid item xs={9}>
                <Typography margin={3} variant="h5">
                  {user.userName}
                </Typography>
                <div {...getRootProps({ className: 'dropzone' })}>
                  <input {...getInputProps()} />
                  <p style={{ cursor: 'pointer', color: 'blue', marginLeft: '20px' }} onClick={() => setDisable(false)}>
                    Upload profile picture
                  </p>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '30%' }}>
                    <Typography variant="subtitle1">Bio</Typography>
                  </Box>
                  <Box sx={{ width: '70%' }}>
                    <TextField
                      name="bio"
                      fullWidth
                      multiline
                      rows={4}
                      defaultValue={user.bio}
                      onChange={handleChange}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '30%' }}>
                    <Typography variant="subtitle1">Gender</Typography>
                  </Box>
                  <Box sx={{ width: '70%' }}>
                    <TextField
                      name="gender"
                      fullWidth
                      multiline
                      defaultValue={user.gender}
                      onChange={handleChange}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '30%' }}>
                    <Typography variant="subtitle1">City</Typography>
                  </Box>
                  <Box sx={{ width: '70%' }}>
                    <TextField
                      name="city"
                      fullWidth
                      multiline
                      defaultValue={user.city}
                      onChange={handleChange}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '30%' }}>
                    <Typography variant="subtitle1">DOB</Typography>
                  </Box>
                  <Box sx={{ width: '70%' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Basic date picker" onChange={handleDateChange} />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  disabled={disable}
                  variant="contained"
                  color="info"
                  sx={{ borderRadius: '10px', marginLeft: '10rem' }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
        <ToastContainer position="bottom-left" />
      </Container>
    </>
  );
};

export default EditProfile;
