import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Avatar, Box, Typography, Button, TextField } from "@mui/material";
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
import { toast } from "react-toastify";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { reportPost } from "../api/apiConnection/postConnection";



// eslint-disable-next-line react/prop-types
const PostHeader = ({ postId, name, image, friendId, buttonClick }: any) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openModal, setOpenModal] = React.useState(false); // State for modal visibility
    const navigate = useNavigate()
    const id = useSelector((state: any) => state.user._id)
    const token = useSelector((state: any) => state.token)
    const dispatch = useDispatch()
    const [warning, setWarning] = React.useState(false);
    const [reason, setReason] = useState('')

    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleWarningOpen = () => {
        setWarning(true);
    };

    const handleWaringClose = () => {
        setWarning(false);
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
        toast.success(`You unfollowed ${name}`)

    }

    const handleReport = () => {
        handleClose();
        setOpenModal(true); // Open the modal
    }

    const handleCloseModal = () => {
        setOpenModal(false); // Close the modal
    }

    const handleSubmit = async (friendId: string) => {
        console.log(friendId);
        console.log(reason);
        const response = await reportPost(id, postId, reason, token)
        console.log(response);
        handleCloseModal()
        handleWaringClose()


    }



    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadios: '5px',
        p: 2,
        height: '16rem',
        width: '30rem',

    };

    return (
        <Flex m='0.5rem 0 1.5rem 0' >
           
            <Flex gap="1rem" onClick={() => navigate(`/profile/${friendId}`)}>
                {/* <UserImage image='../assets/photo.jpg' size="55px" /> */}
                {image ? (
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
                            <MenuItem onClick={handleReport} sx={{ color: 'red' }}>
                                Report
                            </MenuItem>
                            <MenuItem onClick={() => handleFollow(id, friendId)}>
                                Unfollow
                            </MenuItem>
                        </Menu>
                    </>
                )}

                {/* Modal component */}
                <Modal open={openModal} onClose={handleCloseModal}>
                    <Box sx={style}>
                        <Typography variant="h4" textAlign={"center"} gutterBottom>
                            Report User
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Enter the reason for report:
                        </Typography>
                        <Box sx={{ width: '98%' }}>
                            <TextField
                                name="bio"
                                label="Enter...."
                                fullWidth
                                multiline
                                rows={4}
                                onChange={(e: any) => setReason(e.target.value)}
                                value={reason}
                            // onChange={handleChange}
                            />
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                            <Button onClick={handleCloseModal} sx={{ marginRight: 1 }}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleWarningOpen}>
                                Report
                            </Button>
                        </Box>
                    </Box>
                </Modal>
                <Dialog
                    open={warning}
                    onClose={handleWaringClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {`Are you sure want to report ${name}?`}
                    </DialogTitle>
                    <DialogContent>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleWaringClose} color="error">Disagree</Button>
                        <Button onClick={() => handleSubmit(friendId)} autoFocus color="info">
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </Flex>
    );
};

export default PostHeader;
