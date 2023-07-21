import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout: 1500,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});

/**
 * @description retorna uma listagem genérica por path
 * @param {string} path 
 * @returns array
 */
const genericList = (path) => {
    return axiosInstance.get(path);
};

export default {
    genericList
};