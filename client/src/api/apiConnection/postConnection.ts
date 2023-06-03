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


export const getPostById = async (id: string, token: string) => {
  try {
    const response = await baseURL.get(`/api/post/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const getPostByUser = async (id: string, token: string) => {
  try {
    const response = await baseURL.get(`/api/post/userposts/${id}`, {
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
export const deletePost = async (id: string, token: string) => {
  try {
    const response = await baseURL.delete(`/api/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // // Sort the posts based on createdAt in descending order
    // const sortedPosts = response.data.posts.sort((a: any, b: any) => {
    //   return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    // });

    return response;
  } catch (error) {
    throw error;
  }
};


export const uploadPost = async (token: string, body: any) => {

  try {
   const response =  await baseURL
    .post(`/api/post`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      }
    })
    return response.data
  } catch (error) {
    console.log(error);
    throw error
  }

};

export const likePost = (id: string, userId: string, token: string) => {
  baseURL
    .patch(`/api/post/like?id=${id}&userId=${userId}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data, 'success');
    })
    .catch((error) => {
      console.log(error, 'error');
    });
};

