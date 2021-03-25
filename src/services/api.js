import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.4:8000/',
    
    // headers: {
    // //   'Authorization': 'Bearer '+localStorage.token,
    //   'Content-Type': 'application/json',
    //     //'auth': localStorage.token,
    //     //'Content-Type': 'multipart/form-data'
    //   }
});

export default api;