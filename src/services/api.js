import axios from "axios";
import config from "./config.js";


function signin(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, body);
}

function signup(body) {
    return axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, body);
}

function getUserByNick(nick) {
    return axios.get(`${import.meta.env.VITE_API_URL}/users/nick/${nick}`);
}

function getUserByEmail(email) {
    return axios.get(`${import.meta.env.VITE_API_URL}/users/email/${email}`);
}

function getAllServices() {
    return axios.get(`${import.meta.env.VITE_API_URL}/services`);
}

function getCep(cep) {
    return axios.get(`http://viacep.com.br/ws/${cep}/json`);
}

const api = {
    signin, signup,
    getUserByNick, getUserByEmail,
    getAllServices,
    getCep
};
export default api;