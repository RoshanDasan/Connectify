import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deletePost } from "../api/apiConnection/postConnection";
import { useSelector } from "react-redux";

export default function Cards({ id, userId, description, userName, image, likes, comments }: any) {

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

  }

  return (
    <Card >
      <div style={{ flexDirection: 'column-reverse' }}>
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
      </div>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`http://localhost:5000/uploads/${image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {description}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
