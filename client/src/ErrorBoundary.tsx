import {styled } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import Button from '@mui/material/Button';
const FallbackContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '#f8d7da',
  color: '#721c24',
  borderRadius: '4px',
  minHeight: '300px', // Increase the height as desired
  marginTop:"200px",


}));

export const ErrorFallback = ({ error, resetErrorBoundary }: any) => {

  return (
   
    <FallbackContainer>
      <ErrorIcon fontSize="large" color="error" />
      <h2>Oops! Something went wrong.</h2>
      <p>{error.message}</p>
      <Button variant="contained" onClick={resetErrorBoundary}>
        Reset
      </Button>
    </FallbackContainer>
  
  );
};