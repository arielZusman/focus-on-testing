import axios from 'axios'
const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/user'
    : '//localhost:3003/user'

function query() {
    return axios.get(BASE_URL)
        .then(res => res.data)
}

function getById(id){
    return axios.get(`${BASE_URL}/${id}`)
        .then(res=>res.data)
}

export default {
    query,
    getById
}