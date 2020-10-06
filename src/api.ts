import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.lov.education/api/items/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});