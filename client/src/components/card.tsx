import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, CardActionArea, CardActions, Modal, TextField } from '@mui/material';
import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deletePost } from "../api/apiConnection/postConnection";
import { useSelector } from "react-redux";

export default function Cards({ id, userId, description, userName, image, likes, comments, click }: any) {

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleCloser = () => setOpenModal(false);


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const token: any = useSelector((state: any) => state.token)
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeletePost = async (_id: string) => {
    setAnchorEl(null);

    await deletePost(_id, token)
    click()
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Card onClick={handleOpen} >
      {/* <div>
        <Modal
          open={openModal}
          onClose={handleCloser}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={`http://localhost:5000/uploads/${image}`}
                alt=""
              />

            </CardActionArea>

          </Box>
        </Modal>
      </div>
      <div >
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

          <MenuItem onClick={handleClose} >
            Edit
          </MenuItem>
          <MenuItem onClick={() => handleDeletePost(id)}>
            Delete
          </MenuItem>

        </Menu>
      </div> */}
      {/* <CardActionArea> */}
        <CardMedia
        sx={{height: '12rem'}}
          component="img"
          height="140"
          image={`http://localhost:5000/uploads/${image}`}
          alt=""
        />

      {/* </CardActionArea> */}

    </Card>
  );
}
