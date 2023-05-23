import axios from "axios";

const baseURL = axios.create({
    baseURL: "http://localhost:5000"
});

export default baseURL;