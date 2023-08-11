import axios from "axios";
import config from "./config.js";


function signin(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/signin`, body);
}

function signup(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/signup`, body);
}

const api = {
    signin, signup,
};
export default api;