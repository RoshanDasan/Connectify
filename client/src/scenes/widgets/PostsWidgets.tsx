import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../state';
import PostWidgetLoop from './PostWidgetLoop';
import { getPosts } from '../../api/apiConnection/postConnection';
import { LocalDiningRounded } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import { Skeleton } from '@mui/lab';


interface Post {
  _id: string;
  userId: string;
  userName: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
}
const PostsWidgets = () => {
  const dispatch = useDispatch();
  const token: string = useSelector((state: any) => state.token);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      getPosts(token).then((postResponse) => {
      setLoading(true)
      console.log(postResponse, 'postsss');
      dispatch(setPosts({posts: postResponse}));
      setLoading(false)
      setPost(postResponse)
    });
  },[])
 

  
  console.log(post,'loooopppp');

  return (
    <>
      {loading ? (
        <div>
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
        </div>
      ) : (
        <div>
          {post.map(({ _id, userId, userName, description, image, likes, comments }: Post) => (
            <PostWidgetLoop
              key={_id}
              postId={_id}
              userId={userId}
              name={userName}
              description={description}
              image={image}
              likes={likes}
              comments={comments}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default PostsWidgets


