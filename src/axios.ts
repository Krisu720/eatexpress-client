import axios from 'axios';

// const BASE_URL = 'http://localhost:5000/'
const BASE_URL = 'http://192.168.100.67:5000/'

export default axios.create({
    baseURL: BASE_URL,
});