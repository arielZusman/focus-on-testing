import UserService from '../services/UserService.js'

export default {
    state: {
        
    },
    getters: {
        
    },
    mutations: {

    },
    actions: {
        login(context, {userCred}) {
            UserService.login(userCred)
        },
        signup(context, {userCred}) {
            UserService.signup(userCred)
            
        },
        logout(context) {
            UserService.logout()
        },
        getUsers(context) {
            UserService.getUsers()
        },
        
    }
}