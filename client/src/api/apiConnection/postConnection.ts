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


export const postComment = async (postId: string, userId: string, body: any, token: string) => {
  try {
    console.log(postId, userId, body, token,'commentttt');
    const data: {
      comment: any;
    } = {
      comment: body
    };
    
    const response = await baseURL.patch(`/api/post/comment/${postId}/${userId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const deleteComment = (postId: string, index: number, token: string) => {
  baseURL.delete(`/api/post/delete_comment/${postId}/${index}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    console.log(response);
    
    return response.data
  }).catch((error) => {
    throw error
  })
}

export const editPost = (postId: string, description: any, token: string) => {
  const data: {
    description: any;
  } = {
    description
  };
  baseURL.put(`/api/post/edit_post/${postId}`, data, {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    console.log(response);
    
  }).catch((err) => {
    throw err
  })
}

