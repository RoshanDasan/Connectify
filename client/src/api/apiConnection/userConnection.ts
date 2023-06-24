import baseURL from '../api';
import { useQuery, useMutation } from 'react-query';

export const getUser = async (userId: string, token: string) => {

  try {
    const response = await baseURL.get(`/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async (token: string, userId: any) => {
  try {
    const response = await baseURL.get(`/user/all/${userId}`, {
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
    const response = await baseURL.patch(`/user?id=${id}&friendId=${friendId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response
  } catch (error) {

  }
}

export const sendRequest = async (id: string, friendId: string) => {
  try {
    const { data } = await baseURL.patch(`/user/request/${id}/${friendId}`)
    return data.status;
  } catch (error) {
    console.error(error);
    throw error
  }
}

export const requestResponse = async (id: string, friendId: string, response: string) => {
  try {

    const { data } = await baseURL.patch(`/user/request/friend/${id}/${friendId}`, { response: { response } });
    return data.status;

  } catch (error) {
    console.error(error);
    throw error

  }
}

export const useSearchUser = (prefix = 'roshan', type: any) => {
  const sender = prefix || 'qwertyuiop';

  return useQuery(['searchUser', prefix], async () => {
    const response = await baseURL.get(`/user/search/${sender}`, { params: { type } });
    return response.data.users;
  });
};


export const useUpdateProfile = () => {

  const updateProfileMutation = useMutation(async ({ id, values, token }: any) => {



    try {
      const response = await baseURL.put(`/user/${id}`, values, {
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

export const blockUserByUser = async (userId: string, blockId: string) => {
  const response = await baseURL.patch(`/user/${userId}/${blockId}`);
  return response.data;
}



