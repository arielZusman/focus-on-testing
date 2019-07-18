import HttpService from "./HttpService";

export default {
  login,
  logout,
  signup,
  getUsers
};

async function login(userCred) {
  const user = await HttpService.ajax("api/auth/login", "post", userCred);
  return user;
}
async function signup(userCred) {
  const user = await HttpService.ajax("api/auth/signup", "post", userCred);
  return user;
}
async function logout() {
  const result = await HttpService.ajax("api/auth/logout", "post");
  return result;
}
function getUsers() {
  HttpService.ajax("api/user").then(res => console.log(res));
}
