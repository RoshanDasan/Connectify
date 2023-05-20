import React, { useState } from 'react';
import { Typography, Avatar, Button, Paper, Grid, Container } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useStyles from './styles';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../state';

const Auth: React.FC = () => {
  let classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch()

  interface RegisterResponse {
    message?: any;
    status: string;
  }

  interface LoginResponse {
    message?: any;
    status: string;
    user: object;
    token: string;
  }

  interface RegisterFormValues {
    name: string;
    userName: string;
    number: string;
    email: string;
    password: string;
  }

  interface LoginFormValues {
    userName: string;
    password: string;
  }

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (values: any, onSubmitProps: any) => {
    if (isSignup) {
      await register(values, onSubmitProps);
    } else {
      await login(values, onSubmitProps);
    }
  };
  const navigate = useNavigate();



  const register = async (values: RegisterFormValues, submitProps: any): Promise<void> => {
    try {
      const response = await axios.post<RegisterResponse>('http://localhost:5000/api/auth/register', values);
      console.log(response.data);
  
      // Handle the success response
      if (response.data.status === 'success') {
        // Show a success toast
        setIsSignup((prevIsSignup) => !prevIsSignup);
        console.log('success');
        toast.success('Registration successful');
  
        // Perform additional actions upon successful registration
  
      } else {
        console.log('failed');
        console.log(response.data.message);
  
        // Handle the failure response
        // Show an error toast
        toast.error('Registration failed');
      }
    } catch (error) {
      console.log('catch');
  
      // Extract the error message if available
      const errorMessage = (error as any)?.response?.data?.message || 'An error occurred during registration';
      console.log(errorMessage);
  
      // Handle the error case
      // Show an error toast
      toast.error(errorMessage);
    }
  };

  const login = async (values:LoginFormValues, submitProps:any) => {
    console.log('logg');
    try {
      const response = await axios.post<LoginResponse>('http://localhost:5000/api/auth/login', values);
      console.log(response.data);
  
      // Handle the success response
      if (response.data.status === 'success') {
        // Show a success toast
        console.log('success');
        dispatch(
          setLogin({
            user : response.data.user,
            token: response.data.token
          })
        )
        navigate('/home')
        toast.success('Login successful');
        // Perform additional actions upon successful registration
  
      } else {
        console.log('failed');
        console.log(response.data.message);
  
        // Handle the failure response
        // Show an error toast
        toast.error('Login failed');
      }
    } catch (error) {
      console.log('catch');
  
      // Extract the error message if available
      const errorMessage = (error as any)?.response?.data?.message || 'An error occurred during Login';
      console.log(errorMessage);
  
      // Handle the error case
      // Show an error toast
      toast.error(errorMessage);
    }
    
  }



  const getValidationSchema = () => {
    if (isSignup) {
      return yup.object().shape({
        name: yup.string().required('Name is required'),
        userName: yup.string().required('UserName is required'),
        number: yup.string().required('Number is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
      });
    } else {
      return yup.object().shape({
        userName: yup.string().required('UserName is required'),
        password: yup.string().required('Password is required'),
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      userName: '',
      number: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: getValidationSchema(),
    onSubmit: handleSubmit,
  });

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer position="bottom-left" />
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? 'Sign up' : 'Sign in'}
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="name"
                  label="Name"
                  handleChange={formik.handleChange}
                  value={formik.values.name}
                  error={formik.errors.name}
                  autoFocus
                  half
                />
                  <Input
                  name="userName"
                  label="UserName"
                  handleChange={formik.handleChange}
                  value={formik.values.userName}
                  error={formik.errors.userName}            
                  half
                />
                    </>
            )}
             {!isSignup && (
                <Input
                  name="userName"
                  label="UserName"
                  handleChange={formik.handleChange}
                  value={formik.values.userName}
                  error={formik.errors.userName}            
                  
                />
                )}
          
            {isSignup && (
              <>
               <Input
                name="number"
                label="Number"
                handleChange={formik.handleChange}
                value={formik.values.number}
                error={formik.errors.number}
                type="number"
              />
                <Input
              name="email"
              label="Email Address"
              handleChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              type="email"
            />
              </>
             
            )}
          
            <Input
              name="password"
              label="Password"
              handleChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors.password}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={formik.handleChange}
                value={formik.values.confirmPassword}
                error={formik.errors.confirmPassword}
                type="password"
              />
            )}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an account? Login In' : 'New user? Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;