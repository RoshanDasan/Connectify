import './App.css';
import { useEffect, useMemo, useRef, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { io } from 'socket.io-client';
import { setLogout, setNotification } from './state';
import Auth from './scenes/Auth/Auth';
import Home from './scenes/Home/Home';
import AdminLogin from './admin-scenes/admin-auth/AdminLogin';
import { themeSettings } from './theme';
import AdminHome from './scenes/Home/AdminHome';
import AdminPostControll from './admin-scenes/admin-post/AdminPostControll';
import { getUser } from './api/apiConnection/userConnection';
import LoadingSkeleton from './components/skeleton/LoadingSkeleton';
import ErrorBoundaryComponent from './ErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary'

const HomeLazy = lazy(() => import('./scenes/Home/Home'));
const ProfileLazy = lazy(() => import('./scenes/ProfilePage/Profile'));
const ProfileEditLazy = lazy(() => import('./components/EditProfile'));
const ChatLazy = lazy(() => import('./scenes/Chat/Chat'));
const VideoCallLazy = lazy(() => import('./scenes/Videocall/VideoCall'));

function App() {
  const mode = useSelector((state : any) => state.mode);
  const isAuth = useSelector((state : any) => state.user);
  const token = useSelector((state : any) => state.token);
  const isBlocked = useSelector((state : any) => state.user?.isBlock);
  const isAdminAuth = useSelector((state : any) => state.admintoken);
  const userId = useSelector((state : any) => state.user?._id);
  const socket: any = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.current = io('http://localhost:5000');
    if (userId) {
      socket.current.emit('new-user-add', userId);
    }

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [userId]);

  useEffect(() => {
    socket.current.on('receive-message', async ({ senderId, message }: any) => {
      console.log(message);
      const { userName } = await getUser(senderId, token);

      dispatch(
        setNotification({
          data: `${userName} sent a message: ${message}`,
        })
      );
    });
  }, [userId]);

  if (isBlocked) {
    dispatch(setLogout());
  }

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={isAuth ? <Home /> : <Auth />} />
          <Route
            path="/home"
            element={
              <Suspense fallback={<LoadingSkeleton />}>
                <ErrorBoundary fallback={ErrorBoundaryComponent} onReset={() => console.log('hsomething went wrong')}>
                  <HomeLazy />
                </ErrorBoundary>
              </Suspense>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <Suspense fallback={<LoadingSkeleton />}>
                <ErrorBoundary fallback={ErrorBoundaryComponent} onReset={() => console.log('something went wrong')}>
                  <ProfileLazy />
                </ErrorBoundary>
              </Suspense>
            }
          />
          <Route
            path="/accounts/edit/:id"
            element={
              <Suspense fallback={<LoadingSkeleton />}>
                <ErrorBoundary fallback={ErrorBoundaryComponent} onReset={() => console.log('something went wrong')}>
                  <ProfileEditLazy />
                </ErrorBoundary>
              </Suspense>
            }
          />
          <Route
            path="/chat"
            element={
              <Suspense fallback={<LoadingSkeleton />}>
                <ErrorBoundary fallback={ErrorBoundaryComponent} onReset={() => console.log('something went wrong')}>
                  <ChatLazy />
                </ErrorBoundary>
              </Suspense>
            }
          />
          <Route
            path="/chat/video_call"
            element={
              <Suspense fallback={<LoadingSkeleton />}>
                <ErrorBoundary fallback={ErrorBoundaryComponent} onReset={() => console.log('something went wrong')}>
                  <VideoCallLazy />
                </ErrorBoundary>
              </Suspense>
            }
          />
          <Route path="/admin" element={isAdminAuth ? <AdminHome /> : <AdminLogin />} />

          <Route
            path="/admin/home"
            element={isAdminAuth ? <AdminHome /> : <AdminLogin />}
          />
          <Route
            path="/admin/user/control"
            element={isAdminAuth ? <AdminHome /> : <AdminLogin />}
          />
          <Route
            path="/admin/post/control"
            element={isAdminAuth ? <AdminPostControll /> : <AdminLogin />}
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
