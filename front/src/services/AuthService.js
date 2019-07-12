import axios from 'axios'
const BASE_URL = process.env.NODE_ENV !== 'development'
    ? ''
    : '//localhost:3003'

function login({nickname}){
    return axios.put(`${BASE_URL}/login`,{
        nickname
    })
    .then(res => res.data)
}

export default {
    login
}