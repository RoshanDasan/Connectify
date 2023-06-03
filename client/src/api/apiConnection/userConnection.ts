import baseURL from "../api";

export const getUser = async (userId: string, token: string) => {
  
    try {
    const response = await baseURL.get(`/api/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.user;
  } catch (error) {
    throw error;
  }
  };

  export const getAllUsers = async (token: string) => {
    try {
      const response = await baseURL.get(`/api/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.users
      
    } catch (error) {
      throw error
    }
  }

  export const followUser = async (id: string, friendId: string, token: string) => {
    try {
      const response = await baseURL.patch(`/api/user?id=${id}&friendId=${friendId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response
    } catch (error) {
      
    }
  }


