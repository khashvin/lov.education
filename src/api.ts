import axios from 'axios';

export const tokens = localStorage.getItem("token");

export default axios.create({
    baseURL: 'https://api.lov.education/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokens}`
    }
});