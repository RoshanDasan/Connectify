import React, { useState, useEffect } from 'react';

function ErrorBoundary({ children }: any) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const handleErrors: any = (error: any, errorInfo: any) => {
      setHasError(true);
      setError(error);
      setErrorInfo(errorInfo);
        console.log(error);
        
    };

    window.addEventListener('error', handleErrors);
    return () => {
      window.removeEventListener('error', handleErrors);
    };
  }, []);

  if (hasError) {
    // You can render a fallback UI here
    return (
      <div>
        <h1>Something went wrong.</h1>
        <p>Please try again later.</p>
      </div>
    );
  }

  return children;
}

export default ErrorBoundary;
