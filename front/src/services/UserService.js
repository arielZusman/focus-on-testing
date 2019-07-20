import HttpService from './HttpService';

export default {
  login,
  logout,
  signup,
  getById
};

async function login(userCred) {
  const user = await HttpService.ajax('api/auth/login', 'post', userCred);
  return user;
}
async function signup(userCred) {
  const user = await HttpService.ajax('api/auth/signup', 'post', userCred);
  return user;
}
async function logout() {
  const result = await HttpService.ajax('api/auth/logout', 'post');
  return result;
}

async function getById(id) {
  return await HttpService.ajax(`api/user/${id}`);
}
