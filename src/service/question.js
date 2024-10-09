import https from './config'

const question = {
    get: (id)=> https.get(`/api/questions/${id}`)
}

export default question