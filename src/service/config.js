import axios from "axios";

const https = axios.create({
    baseURL: 'https://api.testuzb.uz'
})

https.interceptors.request.use((config) =>{
    const token = localStorage.getItem("token")
    if(token){
        config.headers['Authorization'] = `${token}`
    }
    return config
})
export default https