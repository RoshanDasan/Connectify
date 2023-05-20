import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <Box>
    <Navbar />
    Home
    <ToastContainer position="bottom-left" />
    </Box>
  )
}

export default Home
