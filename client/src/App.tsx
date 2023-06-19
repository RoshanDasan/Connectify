import './App.css';
import { useState, useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { io, Socket } from 'socket.io-client';
import { setCurrentChat, setLogout, setNotification } from './state';
import Auth from './scenes/Auth/Auth';
import Home from './scenes/Home/Home';
import AdminLogin from './admin-scenes/admin-auth/AdminLogin';
import Chat from './scenes/Chat/Chat';
import { themeSettings } from './theme';
import Profile from './scenes/ProfilePage/Profile';
import EditProfile from './components/EditProfile';
import AdminHome from './scenes/Home/AdminHome';
import AdminPostControll from './admin-scenes/admin-post/AdminPostControll';
import { getUser } from './api/apiConnection/userConnection';
import VideoCall from './scenes/Videocall/VideoCall';
import { ContextProvider } from './scenes/Videocall/SocketContext';


export function App() {
  const mode = useSelector((state: any) => state.mode);
  const isAuth = useSelector((state: any) => state.user);
  const token = useSelector((state: any) => state.token);
  const isBlocked = useSelector((state: any) => state.user?.isBlock);
  const isAdminAuth = useSelector((state: any) => state.admintoken);
  const userId = useSelector((state: any) => state.user?._id);
  const socket = useRef<Socket | null>(null);
  const dispatch = useDispatch();
  const [sendMessage, setSendMessage] = useState(null);


  useEffect(() => {
    socket.current = io('http://localhost:5000');
    if (userId) {
      socket.current.emit('new-user-add', userId);

      socket.current.on('get-users', (users: any) => {
        // setOnlineUsers(users);
      });
    }

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [userId]);

  // send message to socket server
  useEffect(() => {
    if (sendMessage !== null) socket.current?.emit('send-message', sendMessage);
  }, [sendMessage]);

  // receive message from socket server
  useEffect(() => {
    socket.current.on('receive-message', async ({ senderId, message }: any) => {
      console.log(message);
      const { userName } = await getUser(senderId, token)

      dispatch(setNotification({
        data: `${userName} sended a message ${message}`
      }))
      // console.log('Received message:', data);
    });
  }, [userId]);

  if (isBlocked) {
    dispatch(setLogout());
  }

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className='app'>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {/* user routes */}
          <Routes>
            <Route path='/' element={isAuth ? <Home /> : <Auth />} />
            <Route
              path='/home'
              element={isAuth ? <Home /> : <Navigate to='/' />}
            />
            <Route
              path='/profile/:id'
              element={isAuth ? <Profile /> : <Navigate to='/' />}
            />
            <Route
            
              path='/accounts/edit/:id'
              element={isAuth ? <EditProfile /> : <Navigate to='/' />}
            />
            <Route
              path='/chat'
              element={isAuth ? <Chat /> : <Navigate to='/' />}
            />
            <Route
              path='/chat/video_call'
              element={isAuth ? <VideoCall /> : <Navigate to='/' />}
            />


            {/* admin routes */}
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

          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
