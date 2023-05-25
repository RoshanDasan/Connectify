import baseURL from "../api";

export const getPosts = async (token: string) => {
    try {
        const response = await baseURL.get(`/api/post`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.posts;
    } catch (error) {
        throw error;
    }
}
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
  