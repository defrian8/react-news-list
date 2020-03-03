import axios from 'axios';
const BASE_URL = "http://127.0.0.1:8000/api"
const CONTENT_TYPE = "application/json"

const api = axios.create({
    baseURL: BASE_URL,
    responseType: "json",
    headers:  { 'content-type': CONTENT_TYPE }
});

export default api;