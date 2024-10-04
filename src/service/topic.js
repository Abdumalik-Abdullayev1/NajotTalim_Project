import https from './config'

const topic = {
    get: (params)=> https.get('/api/topics/getAll', {params})
}

export default topic