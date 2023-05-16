import React, { useState } from 'react';
import {Typography, Avatar, Button, Paper, Grid, Container} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import useStyles from './styles';
import Input from './Input';


const Auth: React.FC = () => {

  let classes = useStyles()

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);



 const handleShowPassword = () => {
  setShowPassword((prevShowPassword)=> !prevShowPassword)
 }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
 
  };
  const switchMode = () => {
      setIsSignup((prevIsSignup) => !prevIsSignup);
      // handleShowPassword(false)
  }




  const handleChange = () => {};

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup?'Already have an account? Login In':'New user? Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;