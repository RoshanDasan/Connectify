import baseURL from "../api";
import { useQuery, useMutation } from 'react-query';

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


export const useSearchUser = (prefix: any = 'roshan', token: string) => {
  let sender: any
  if (prefix) {
    sender = prefix
  } else {
    sender = 'qwertyuiop'
  }
  return useQuery(['searchUser', prefix], async () => {
    const response = await baseURL.get(`/api/user/search/${sender}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.users;
  });
};


export const useUpdateProfile = () => {

  const updateProfileMutation = useMutation(async ({ id, values, token }: any) => {



    try {
      const response = await baseURL.put(`/api/user/${id}`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data; // Assuming the response data is returned
    } catch (error) {
      console.error(error);
      throw new Error('Failed to update profile'); // Throw an error if the request fails
    }
  });

  return updateProfileMutation;
};



