import React, { useState } from 'react';
import { Typography, Avatar, Button, Paper, Grid, Container } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setAdminLogin } from '../../state';
import { adminLogin } from '../../api/apiConnection/authConnect';
import Input from './Input';
import useStyles from '../../scenes/Auth/styles';

const AdminLogin: React.FC = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const response: any = await adminLogin(values);

      if (response) {
        dispatch(
          setAdminLogin({
            admin: response.admin,
            admintoken: response.token,
          })
        );
        navigate('/admin/home');
        toast.success('Admin Logged In');
      }
    } catch (error) {
      toast.error('Failed to logIn');
    }
  };


  const getValidationSchema = () => {
    if (isSignup) {
      return yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required'),
      });
    } else {
      return yup.object().shape({
        password: yup.string().required('Password is required'),
      });
    }
  };

  const isSignup = false;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: getValidationSchema(),
    onSubmit: handleSubmit,
  });

  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer position="bottom-left" />
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Admin Login
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="email"
              label="Email Address"
              handleChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors.password}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="info"
            className={classes.submit}
            sx={{ marginTop: '15px', marginBottom: '15px' }}
          >
            Sign Up
          </Button>
          <div id="googleLoginButton"></div>
        </form>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
