import './App.css';
import { useEffect, useMemo, useRef, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { io } from 'socket.io-client';
import { setLogout, setNotification } from './state';
import { themeSettings } from './theme';
import { getUser } from './api/apiConnection/userConnection';
import LoadingSkeleton from './components/skeleton/LoadingSkeleton';

// user Lazy components
const AuthLazy = lazy(() => import('./scenes/Auth/Auth'))
const HomeLazy = lazy(() => import('./scenes/Home/Home'));
const ProfileLazy = lazy(() => import('./scenes/ProfilePage/Profile'));
const ProfileEditLazy = lazy(() => import('./components/EditProfile'));
const ChatLazy = lazy(() => import('./scenes/Chat/Chat'));
const VideoCallLazy = lazy(() => import('./scenes/Videocall/VideoCall'));

// admin lazy components
const AdminLoginLazy = lazy(() => import('./admin-scenes/admin-auth/AdminLogin'));
const AdminHomeLazy = lazy(() => import('./scenes/Home/AdminHome'));
const AdminPostLazy = lazy(() => import('./admin-scenes/admin-post/AdminPostControll'))


function App() {
  const mode = useSelector((state: any) => state?.mode);
  const token = useSelector((state: any) => state?.token);
  const isBlock = useSelector((state: any) => state?.user?.isBlock);
  const isAdminAuth = useSelector((state: any) => state?.admintoken);
  const userId = useSelector((state: any) => state?.user?._id);

  const socket: any = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.current = io('http://localhost:5000');
    if (token) {
      socket.current.emit('new-user-add', userId);
    }

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [token]);

  useEffect(() => {
    socket.current.on('notification', async ({ senderId, message }: any) => {
      console.log(message);
      const { userName } = await getUser(senderId, token);

      dispatch(
        setNotification({
          data: `${userName} sent a message: ${message}`,
        })
      );
    });
  }, [userId]);

  if (isBlock) {
    dispatch(setLogout());
  }

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>

          <Route path="/"
            element={
              <Suspense fallback={<LoadingSkeleton />}>
                {token ? <HomeLazy /> : <AuthLazy />}
              </Suspense>
            }
          />

          <Route
            path="/home"
            element={
              <Suspense fallback={<LoadingSkeleton />}>
                {token ? <HomeLazy /> : <AuthLazy />}

              </Suspense>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <Suspense fallback={<LoadingSkeleton />}>
                {token ? <ProfileLazy /> : <AuthLazy />}
              </Suspense>
            }
          />
          <Route
            path="/accounts/edit/:id"
            element={
              <Suspense fallback={<LoadingSkeleton />}>
                {token ? <ProfileEditLazy /> : <AuthLazy />}
              </Suspense>
            }
          />
          <Route
            path="/chat"
            element={
              <Suspense fallback={<LoadingSkeleton />}>
                {token ? <ChatLazy /> : <AuthLazy />}
              </Suspense>
            }
          />
          <Route
            path="/chat/video_call"
            element={
              <Suspense fallback={<LoadingSkeleton />}>
                {token ? <VideoCallLazy /> : <AuthLazy />}

              </Suspense>
            }
          />

          {/* admin routes */}
          <Route path="/admin" element={
            <Suspense fallback={<LoadingSkeleton />}>
              {isAdminAuth ? <AdminHomeLazy /> : <AdminLoginLazy />}
            </Suspense>
            } />

          <Route
            path="/admin/home"
            element={
              <Suspense fallback={<LoadingSkeleton />}>
                {isAdminAuth ? <AdminHomeLazy /> : <AdminLoginLazy />}
              </Suspense>
            }
          />
          <Route
            path="/admin/user/control"
            element={
              <Suspense fallback={<LoadingSkeleton />}>
                {isAdminAuth ? <AdminHomeLazy /> : <AdminLoginLazy />}
              </Suspense>
            }
          />
          <Route
            path="/admin/post/control"
            element={
              
              <Suspense  fallback={<LoadingSkeleton />}>
                {isAdminAuth ? <AdminPostLazy /> : <AdminLoginLazy />}
              </Suspense>
            }
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
