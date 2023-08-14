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
function getCategories() {
    return axios.get(`${import.meta.env.VITE_API_URL}/categories`);
}
function createService(body, token) {
    return axios.post(`${import.meta.env.VITE_API_URL}/services`, body, config(token));
}
function getAllServices() {
    return axios.get(`${import.meta.env.VITE_API_URL}/services`);
}
function getServicesByUser(token) {
    return axios.get(`${import.meta.env.VITE_API_URL}/services`, config(token));
}
function getServicesById(id) {
    return axios.get(`${import.meta.env.VITE_API_URL}/services/id/${id}`);
}
function getServiceAllInfo(id) {
    return axios.get(`${import.meta.env.VITE_API_URL}/services/${id}/all-info`);
}
function updateService(body, token, id) {
    return axios.put(`${import.meta.env.VITE_API_URL}/services/${id}`, body, config(token));
}
function createPhone(body, token) {
    return axios.post(`${import.meta.env.VITE_API_URL}/phones`, body, config(token));
}
function getUsersCount() {
    return axios.get(`${import.meta.env.VITE_API_URL}/users/count`);
}
function getServicesCount() {
    return axios.get(`${import.meta.env.VITE_API_URL}/services/count`);
}
function getCep(cep) {
    return axios.get(`http://viacep.com.br/ws/${cep}/json`);
}

const api = {
    signin, signup,
    getUserByNick, getUserByEmail,
    getCategories, updateService,
    createService, getAllServices, getServicesByUser, getServicesById,
    getUsersCount, getServicesCount, getServiceAllInfo,
    createPhone,
    getCep
};
export default api;