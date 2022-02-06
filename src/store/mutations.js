const mutations = {
  CREATE_NEW_USER(state, payload) {
    state.users = [...state.users, payload];
  },
  EDIT_TITLE(state, payload) {
    state.title = payload;
  },
};

export default mutations;
