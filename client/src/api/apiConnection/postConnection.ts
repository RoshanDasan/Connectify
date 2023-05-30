import baseURL from "../api";

export const getPosts = async (token: string) => {
  try {
    const response = await baseURL.get(`/api/post`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    // Sort the posts based on createdAt in descending order
    const sortedPosts = response.data.posts.sort((a: any, b: any) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    
    return sortedPosts;
  } catch (error) {
    throw error;
  }
};


export const uploadPost = (token: string, body: any) => {
    console.log(token, body, 'bodyyy');
  
    baseURL
      .post(`/api/post`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response, 'success');
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  };
  