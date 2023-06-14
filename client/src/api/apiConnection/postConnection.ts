import baseURL from '../api';

export const getPosts = async (token: string) => {
  try {
    const response = await baseURL.get(`/post`, {
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
    const response = await baseURL.get(`/post/post/${id}`, {
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
    const response = await baseURL.get(`/post/userposts/${id}`, {
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
    const response = await baseURL.delete(`/post/${id}`, {
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
    const response = await baseURL
      .post(`/post`, body, {
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
    .patch(`/post/like?id=${id}&userId=${userId}`, null, {
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
    console.log(postId, userId, body, token, 'commentttt');
    const data: {
      comment: any;
    } = {
      comment: body
    };

    const response = await baseURL.patch(`/post/comment/${postId}/${userId}`, data, {
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
  baseURL.delete(`/post/delete_comment/${postId}/${index}`, {
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
  baseURL.put(`/post/edit_post/${postId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    console.log(response);

  }).catch((err) => {
    throw err
  })
}

export const useFollowers = async (userId: string, token: string) => {

  const response = await baseURL
    .get(`/user/followers/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  return response.data;

};


export const useFollowings = async (userId: string, token: string) => {
    const response = await baseURL
      .get(`/user/followings/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response.data;
};

export const reportPost = async (userId: string, postId: string, reason: any, token: string) => {
  const value: {
    reason: any;
  } = {
    reason
  };
  const { data } = await baseURL.post(`/post/report/${userId}/${postId}`, value, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return data;
}

export const reportedUsers = async (postId: string, token: string) => {
  const { data } = await baseURL.get(`/post/reporters/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return data;
}




