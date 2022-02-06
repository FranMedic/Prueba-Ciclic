const mutations = {
  // nombro las mutacion en mayusculas para poder diferenciarlas bien de las acciones ya que las suelo llamar igual
  CREATE_NEW_USER(state, payload) {
    state.users = [...state.users, payload];
  },
  EDIT_TITLE(state, payload) {
    state.title = payload;
  },
};

export default mutations;
