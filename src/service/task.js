import https from './config'

const tasks = {
    get: (params)=> https.get('/api/task/get', {params})
}

export default tasks