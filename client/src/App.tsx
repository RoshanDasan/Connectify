import './App.css';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { setLogout, setMode } from './state';
import { themeSettings } from './theme';
import LoadingSkeleton from './components/skeleton/LoadingSkeleton';
import ErrorPage from './components/ErrorPage';

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

  const dispatch = useDispatch();
  // dispatch(setMultipleMode())

  useEffect(() => {
    // Start with dark mode
    dispatch(setMode());

    // Switch to light mode after a delay
    const timeout = setTimeout(() => {
      dispatch(setMode());
    }, 500); // Change the delay as per your requirement (2 seconds in this example)

    return () => clearTimeout(timeout); // Cleanup the timeout when the component unmounts
  }, []);


  if (isBlock) {
    dispatch(setLogout());
  }

  const theme = createTheme(themeSettings(mode))


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

              <Suspense fallback={<LoadingSkeleton />}>
                {isAdminAuth ? <AdminPostLazy /> : <AdminLoginLazy />}
              </Suspense>
            }
          />
          <Route
            path="/*"
            element={

              <ErrorPage />
            }
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
