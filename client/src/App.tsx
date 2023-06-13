import './App.css';
import Auth from './scenes/Auth/Auth';
import Home from './scenes/Home/Home';
import AdminLogin from './admin-scenes/admin-auth/AdminLogin';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { themeSettings } from './theme';
import Profile from './scenes/ProfilePage/Profile';
import EditProfile from './components/EditProfile';
import AdminHome from './scenes/Home/AdminHome';
import AdminPostControll from './admin-scenes/admin-post/AdminPostControll';
import { setLogout } from './state';
import Chat from './scenes/Chat/Chat';

export function App() {
  const mode = useSelector((state: any) => state.mode);
  const isAuth = useSelector((state: any) => state.user);
  const isBlocked = useSelector((state: any) => state.user?.isBlock);
  const isAdminAuth = useSelector((state: any) => state.admintoken);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const dispatch = useDispatch()

if(isBlocked){
  dispatch(setLogout())
}


  return (
    <div className='app'>
      <Router>

        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Routes>
            <Route path='/' element={(isAuth ) ? <Home /> : <Auth />} />
            <Route
              path='/home'
              element={(isAuth ) ? <Home /> : <Navigate to='/' />}
            />
            <Route path='/admin' element={isAdminAuth ? <AdminHome /> : <AdminLogin />} />
            <Route
              path='/admin/home'
              element={isAdminAuth ? <AdminHome /> : <AdminLogin />}
            />
            <Route
              path='/admin/user/control'
              element={isAdminAuth ? <AdminHome /> : <AdminLogin />}
            />
            <Route
              path='/admin/post/control'
              element={isAdminAuth ? <AdminPostControll /> : <AdminLogin />}
            />
            <Route
              path='/profile/:id'
              element={(isAuth) ? <Profile /> : <Navigate to='/' />}
            />
            <Route
              path='/accounts/edit/:id'
              element={(isAuth) ? <EditProfile /> : <Navigate to='/' />}
            />
            <Route
              path='/chat'
              element={(isAuth) ? <Chat /> : <Navigate to='/' />}
            />
           
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
