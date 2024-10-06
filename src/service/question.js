import https from './config'

const question ={
    get: (data)=> https.get('/api/questions/getAll', data)
}

export default question