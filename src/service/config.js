import axios from "axios";

const https = axios.create({
    baseURL: 'http://3.68.214.58:8080'
})

https.interceptors.request.use((config) =>{
    const token = localStorage.getItem("token")
    if(token){
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})
export default https