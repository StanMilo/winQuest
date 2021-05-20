import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      loggedIn: false,
    },
  },
  mutations: {
    setLoggedIn(state, isLoggedIn) {
      state.user.loggedIn = isLoggedIn;
    },
  },
  actions: {},
  modules: {},
});
