import { Avatar, Box, Typography } from "@mui/material";
import Flex from "./DisplayFlex";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";

// eslint-disable-next-line react/prop-types
const PostHeader = ({ name, subtitle }: any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Flex m='0.5rem 0 1.5rem 0' >
            <Flex gap="1rem">
                {/* <UserImage image='../assets/photo.jpg' size="55px" /> */}
                <Avatar />
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

                    <Typography fontSize="0.75rem">
                        {subtitle}
                    </Typography>
                </Box>
            </Flex>
            <div>
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
                 
                        <MenuItem  onClick={handleClose} sx={{color: 'red'}}>
                            Report
                        </MenuItem>
                        <MenuItem  onClick={handleClose}>
                           Unfollow
                        </MenuItem>
               
                </Menu>
            </div>
        </Flex>
    );
};

export default PostHeader;
