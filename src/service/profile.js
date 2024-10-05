import https from './config'

const profile = {
    get: (data)=> https.get('/api/user/getprofile', data)
}

export default profile