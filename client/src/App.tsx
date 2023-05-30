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
// import Profile from './scenes/ProfilePage/Profile';
// import Sidebar from './scenes/Sidebar/Sidebar';

export function App() {
  const mode = useSelector((state: any) => state.mode);
  const isAuth = useSelector((state: any) => state.user);
  const isAdminAuth = useSelector((state: any) => state.admintoken);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  console.log(isAuth,'isuser');
  console.log(isAdminAuth,'isadmin');
  

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
              element={ <AdminHome  />}
            />
            {/* <Route
              path='/profile'
              element={isAuth ? <Profile username={user.userName} followers={2} following={5} posts={0} /> : <Navigate to='/' />}
            /> */}
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
