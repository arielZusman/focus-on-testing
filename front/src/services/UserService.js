import HttpService from './HttpService'

export default {
    login,
    logout,
    signup,
    getUsers
}

function login(userCred) {
    HttpService.ajax('api/auth/login', 'post', userCred)
    .then(res => console.log(res))
}
function signup(userCred) {
    HttpService.ajax('api/auth/signup', 'post', userCred)
    .then(res => console.log(res))
}
function logout() {
    HttpService.ajax('api/auth/logout', 'post')
    .then(res => console.log(res))
}
function getUsers() {
    HttpService.ajax('api/user')
    .then(res => console.log(res))
}