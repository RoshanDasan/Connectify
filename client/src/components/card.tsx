import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box,  CardActionArea,  Modal } from '@mui/material';
import { toast } from 'react-toastify'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deletePost } from "../api/apiConnection/postConnection";
import { useSelector } from "react-redux";

export default function Cards({ id, image, click, borderView }: any) {

  
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
    toast.success('Post deleted')
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    
    boxShadow: 24,
    borderRadios: '5px',
    p: 4,
  };

  return (
    <Card  >
      <div>
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
                height="550rem"
                image={`http://localhost:5000/uploads/${image}`}
                alt=""
              />

            </CardActionArea>

          </Box>
        </Modal>
      </div>
      <div >
        {borderView && (
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
  
            <MenuItem onClick={handleClose} >
              Edit
            </MenuItem>
            <MenuItem onClick={() => handleDeletePost(id)}>
              Delete
            </MenuItem>
  
          </Menu>
          </>
           
        )}
      
      </div>
      {/* <CardActionArea> */}
        <CardMedia
        onClick={handleOpen}
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
