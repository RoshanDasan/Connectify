import axios from "axios";

const baseURL = axios.create({
    baseURL: process.env.BASE_URL
});

export default baseURL;