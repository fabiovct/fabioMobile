import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/',
    // headers: {
    //   'Authorization': 'Bearer '+localStorage.token,
    //   //'Content-Type': 'application/json',
    //     //'auth': localStorage.token,
    //     //'Content-Type': 'multipart/form-data'
    //   }
});

export default api;