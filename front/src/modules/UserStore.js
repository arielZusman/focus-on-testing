import UserService from "../services/UserService.js";
import router from "@/router";
export default {
  state: {
    user: {
      _id: "",
      username: "",
      email: ""
    }
  },
  getters: {
    isUserLoggedIn: state => !!state.user._id,
    loggedInUser: state => state.user
  },
  mutations: {
    setUser(state, { user }) {
      state.user = user;
    },
    removeUser(state) {
      state.user = {
        _id: "",
        username: "",
        email: ""
      };
    }
  },
  actions: {
    async login(context, { userCred }) {
      const user = await UserService.login(userCred);
      context.commit({ type: "setUser", user });
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      router.push("/");
      return user;
    },
    async signup(context, { userCred }) {
      const user = await UserService.signup(userCred);
      context.commit({ type: "setUser", user });
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      return user;
    },
    async logout(context) {
      const result = await UserService.logout();

      if (result.message) {
        context.commit({ type: "removeUser" });
        localStorage.removeItem("loggedInUser");
      }
    },
    getUsers(context) {
      UserService.getUsers();
    }
  }
};
