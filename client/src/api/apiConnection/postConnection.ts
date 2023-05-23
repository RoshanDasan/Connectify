import baseURL from "../api";

export const getPosts = (token: string) => {
    return baseURL.get(`/api/post`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
        return response.data.posts;
    })
    .catch((error) => {
        throw error;
    })
}