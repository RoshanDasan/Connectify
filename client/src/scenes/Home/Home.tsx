import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { Block } from "@mui/icons-material";
import UserWidget from "../widgets/UserWidgets";
import PostWidgets from "../widgets/PostWIdgets";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:100px)");
  const { _id } = useSelector((state: any) => state.token.user);
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "Block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={''} />
        </Box>
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <PostWidgets picturePath={null} />
        </Box>
        {isNonMobileScreens && <Box flexBasis="26%" ></Box>}
      </Box>

      <ToastContainer position="bottom-left" />
    </Box>
  )
}

export default Home
