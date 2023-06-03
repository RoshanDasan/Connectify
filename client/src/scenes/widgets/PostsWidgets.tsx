import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from '../../state';
import PostWidgetLoop from './PostWidgetLoop';
import { getPosts } from '../../api/apiConnection/postConnection';



const PostsWidgets = (postClick: any) => {
  const dispatch = useDispatch();
  const token: string = useSelector((state: any) => state.token);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true)
  const [clicked, setClicked] = useState(false)


  const buttonClick = () => {
    console.log('clikeddd');
    
    setClicked(() => !clicked)
  }

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
  }, [clicked]);
  return (
    <>

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
              click={buttonClick}
            />
          ))}
        </div>
  
    </>
  );
}

export default PostsWidgets


