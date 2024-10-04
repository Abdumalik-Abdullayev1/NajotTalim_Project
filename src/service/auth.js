import https from "./config";

const auth = {
    sign_in: (data)=> https.post('/all/user/login', data),
    sign_up: (data)=> https.post('/user/getprofile', data)
}

export default auth