import './App.css';
import Auth from './scenes/Auth/Auth';
import Home from './scenes/Home/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { themeSettings } from './theme';

export function App() {
  const mode = useSelector((state: any) => state.mode);
  const isAuth = useSelector((state: any) => state.token);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className='app'>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={isAuth ? <Home /> : <Auth />} />
            <Route
              path='/home'
              element={isAuth ? <Home /> : <Navigate to='/' />}
            />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
