import './App.css';
import Auth from './scenes/Auth/Auth';
import Home from './scenes/Home/Home';
import AdminLogin from './admin-scenes/admin-auth/AdminLogin';
import AdminHome from './admin-scenes/admin-home/AdminHome';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { themeSettings } from './theme';
import Profile from './scenes/ProfilePage/Profile';
import EditProfile from './components/EditProfile';

export function App() {
  const mode = useSelector((state: any) => state.mode);
  const isAuth = useSelector((state: any) => state.user);
  const isAdminAuth = useSelector((state: any) => state.admintoken);

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
            <Route path='/admin' element={isAdminAuth ? <Home /> : <AdminLogin />} />
            <Route
              path='/admin/home'
              element={<AdminHome />}
            />
            <Route
              path='/profile/:id'
              element={isAuth ? <Profile /> : <Navigate to='/' />}
            />
            <Route
              path='/accounts/edit/:id'
              element={isAuth ? <EditProfile /> : <Navigate to='/' />}
            />
           
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
