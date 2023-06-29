import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography} from '@mui/material';
import { Favorite, Comment } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';

interface PostProps {
  image: string;
  likes: number;
  comments: number;
}

const Post: React.FC<PostProps> = ({ image, likes, comments }) => {

  return (
    <Card sx={{ maxWidth: '400px', margin: '1rem' }}>
      <CardMedia component="img" height="200" image={image} alt="Post Image" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor ligula in ante gravida, a ullamcorper
          lorem tempus.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Tooltip title={likes === 1 ? '1 like' : `${likes} likes`} placement="bottom">
            <IconButton aria-label="like">
              <Favorite />
            </IconButton>
          </Tooltip>
          <Typography variant="caption" color="text.secondary">
            {likes}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title={comments === 1 ? '1 comment' : `${comments} comments`} placement="bottom">
            <IconButton aria-label="comment">
              <Comment />
            </IconButton>
          </Tooltip>
          <Typography variant="caption" color="text.secondary">
            {comments}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Post;
