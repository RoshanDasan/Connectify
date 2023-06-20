import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea, Modal, TextField, Button } from '@mui/material';
import { toast } from 'react-toastify'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deletePost } from "../api/apiConnection/postConnection";
import { useSelector } from "react-redux";
import { getPostById, editPost } from "../api/apiConnection/postConnection";

export default function Cards({ id, userId, image,click, borderView}: any) {
  const [openModal, setOpenModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(image);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const token: any = useSelector((state: any) => state.token);
  const {_id}: any = useSelector((state: any) => state.user);
  const open = Boolean(anchorEl);

  const handleOpen = () => setOpenModal(true);
  const handleCloser = () => {
    setOpenModal(false);
    setEditMode(false);

  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeletePost = async (_id: string) => {
    setAnchorEl(null);
    await deletePost(_id, token);
    click();
    toast.success('Post deleted');
  };

  const handleEditButtonClick = async () => {
    const postDetails: any = await getPostById(id, token)
    const { description } = postDetails.data.post
    console.log(description);
    setEditData(description)
    setEditMode(true);
    setOpenModal(true);
  };



  const handleUpdate = () => {
    // Handle image update logic here
    // You can make an API request to update the image or handle it as per your requirements
    // Once the image is updated, you can close the modal and update the UI accordingly
    console.log(editData);
    const editResponse = editPost(id, editData, token)
    toast.success('Your post was updated')
    setOpenModal(false);
    setEditMode(false);
    // Perform necessary actions after image update
    // ...
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadios: '5px',
    p: 2,
    height: '30rem',
    width: '35rem',

  };

  return (
    <Card>
      <div >
        <Modal
          open={openModal}
          onClose={handleCloser}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CardActionArea >
              <CardMedia
                component="img"
                loading="lazy"
                image={image}
                alt=""
              />
            </CardActionArea>
            {editMode && (
              <TextField
                name="description"
                fullWidth
                multiline
                sx={{ marginTop: 2 }}
                value={editData}
                onChange={(event) => setEditData(event.target.value)}
              />
            )}

            {editMode && (
              <Button sx={{ margin: 2 }} color="success" variant="contained" onClick={handleUpdate}>
                Update
              </Button>
            )}
          </Box>
        </Modal>
      </div>
      <div>
        {borderView && _id === userId  && (
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
              <MenuItem onClick={handleEditButtonClick}>Edit</MenuItem>
              <MenuItem onClick={() => handleDeletePost(id)}>Delete</MenuItem>
            </Menu>
          </>
        )}
      </div>
      <CardActionArea>
        <CardMedia
          onClick={handleOpen}
          sx={{ height: '12rem' }}
          component="img"
          height="140"
          image={image}
          alt=""
        />
      </CardActionArea>
    </Card>
  );
}
