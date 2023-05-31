import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../state';
import PostWidgetLoop from './PostWidgetLoop';
import { getPosts } from '../../api/apiConnection/postConnection';
import { Avatar } from '@mui/material';
import { Skeleton } from '@mui/lab';


const PostsWidgets = () => {
  const dispatch = useDispatch();
  const token: string = useSelector((state: any) => state.token);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const postResponse = await getPosts(token);
        setPost(postResponse);
        dispatch(setPosts({ posts: postResponse }));
        setLoading(false);
      } catch (error) {
        // Handle any potential errors here
        console.error('Error occurred while fetching posts:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
          <Skeleton variant="text" width={200} />
          <Skeleton width={400} height={400}>
            {/* <PostWidgetLoop/> */}
          </Skeleton>
        </div>
      ) : (
        <div>
          {post.map(({ _id, userId, description, userName, image, likes, comments }: any) => (


            <PostWidgetLoop
              key={_id}
              id={_id}
              userId={userId}
              description={description}
              userName={userName}
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


