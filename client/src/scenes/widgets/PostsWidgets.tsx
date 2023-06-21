import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../state';
import PostWidgetLoop from './PostWidgetLoop';
import { getPosts } from '../../api/apiConnection/postConnection';
import { CircularProgress } from '@mui/material';



const PostsWidgets = ({ data, onButtonClick }: any) => {
  const dispatch = useDispatch();
  const token: string = useSelector((state: any) => state.token);
  const userId: string = useSelector((state: any) => state.user._id);
  const user: any = useSelector((state: any) => state.user);
  const [post, setPost] = useState([]);
  const [clicked, setClicked] = useState(false)
  const [loading, setLoading] = useState(true)



  const buttonClicks = () => {


    setClicked(() => !clicked)
  }

  const fetchData = async () => {
    try {
      const postResponse = await getPosts(token);

      const friendPosts = postResponse.filter((singlePost: any) => user.followers.includes(singlePost.userId) || singlePost.userId == userId)

      setPost(friendPosts);
      dispatch(setPosts({ posts: postResponse }));
      setLoading(false)
    } catch (error) {
      // Handle any potential errors here
      throw error
    }
  };

  useEffect(() => {
    fetchData();
  }, [clicked, data]);
  return (
    <>
      {loading && (
        <div style={{textAlign:'center'}}>
        
          <CircularProgress />
        

        </div>
        
      )}

      <div>
        {post.map(({ _id, userId, description, userName, image,video, likes, comments }: any) => (


          <PostWidgetLoop
            key={_id}
            id={_id}
            userId={userId}
            description={description}
            userName={userName}
            image={image}
            video={video}
            likes={likes}
            commentList={comments}
            click={buttonClicks}
            globalClick={onButtonClick}

          />
        ))}
      </div>

    </>
  );
}

export default PostsWidgets


