import baseURL from "../api";

export const getChat = async (userId: string, token: string) => {
    try {

        const chats = await baseURL.get(`/api/chat/${userId}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return chats.data;

    } catch (error) {
        throw error
    }
}

export const getMessages = async (chatId: string, token: string) => {
    try {
        const response = await baseURL.get(`/api/message/${chatId}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}


export const sendMessage = async (data: any, token: string) => {
    try {

        const response = await baseURL.post('/api/message', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log(response);
    } catch (error) {
        throw error;
    }
};
