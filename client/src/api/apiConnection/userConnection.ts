import baseURL from "../api";

export const getUser = (userId: string, token: string) => {
    console.log(token);
  
    return baseURL.get(`/api/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data.user, '/////');
        return response.data.user;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };


