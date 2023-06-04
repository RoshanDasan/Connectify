import { Avatar, Box, Typography } from "@mui/material";
import Flex from "./DisplayFlex";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { followUser } from "../api/apiConnection/userConnection";
import { useDispatch } from "react-redux";
import { setUnfollower } from "../state";

// eslint-disable-next-line react/prop-types
const PostHeader = ({ name, image, friendId, buttonClick }: any) => {
    console.log(image, 'dppppp');

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const id = useSelector((state: any) => state.user._id)
    const token = useSelector((state: any) => state.token)
    const dispatch = useDispatch()
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleFollow = async (id: string, friendId: string) => {
        handleClose()
        const response = await followUser(id, friendId, token)
        dispatch(
            setUnfollower({
                unfollower: response?.data.friend._id
            })
        )

        buttonClick()

    }

    return (
        <Flex m='0.5rem 0 1.5rem 0' >
            <Flex gap="1rem" onClick={() => navigate(`/profile/${friendId}`)}>
                {/* <UserImage image='../assets/photo.jpg' size="55px" /> */}
                {image? (
                    <div className="profile-picture">
                        <Avatar alt={name} src={`http://localhost:5000/uploads/${image}`} />
                    </div>
                ) : (
                    <Avatar alt={name} />
                )}
                <Box

                >
                    <Typography

                        variant="h5"
                        fontWeight="500"
                        sx={{
                            "&:hover": {
                                color: 'blue',
                                cursor: "pointer",
                            },
                        }}

                    >
                        {name}
                    </Typography>

                </Box>
            </Flex>

            <div>
                {friendId === id ? (
                    <>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>



                    </>

                ) : (
                    <>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    width: '20ch',
                                },
                            }}
                        >

                            <MenuItem onClick={handleClose} sx={{ color: 'red' }}>
                                Report
                            </MenuItem>
                            <MenuItem onClick={() => handleFollow(id, friendId)}>
                                Unfollow
                            </MenuItem>

                        </Menu>
                    </>
                )}



            </div>
        </Flex>
    );
};

export default PostHeader;
