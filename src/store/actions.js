const actions = {
  createNewUserAction({ commit }, newUser) {
    commit("CREATE_NEW_USER", newUser);
  },
  editTitleAction({ commit }, newTitle) {
    commit("EDIT_TITLE", newTitle);
  },
};
export default actions;
