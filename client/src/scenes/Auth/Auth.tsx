import React, { useState } from 'react';
import { Typography, Avatar, Button, Paper, Grid, Container } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useStyles from './styles';
import Input from './Input';

const validationSchema = yup.object().shape({
  name: yup.string().required('First Name is required'),
  userName: yup.string().required('UserName is required'),
  number: yup.string().required('Number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
});

const Auth: React.FC = () => {
  let classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (values: any, onSubmitProps: any) => {

    if (isSignup) await register(values, onSubmitProps)
    else await login(values, onSubmitProps)
  };

  const register = async (values: object, submitProps: any) => {
    const formData = new FormData();
  
    for (const [key, value] of Object.entries(values)) {
      formData.append(key, value);
    }
  
  console.log(values);
  
    try {
      const registerResponse = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(values)
      })
      
     } catch (error) {
      console.error(error,'+++++++++++++');
    }
  };
  
  const login = async (values: object, submitProps: any) => {
    console.log('login');

  }

  const formik = useFormik({
    initialValues: {
      name: '',
      userName: '',
      number:'',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  

  return (
    <Container component="main" maxWidth="xs">
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
             {isSignup && (
              <Input
                name="number"
                label="Number"
                handleChange={formik.handleChange}
                value={formik.values.number}
                error={formik.errors.number}
                type="number"
              />
            )}
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
