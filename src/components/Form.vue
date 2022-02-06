<template>
  <!-- He creado dos formularios para editar y para crear usarios,-->
  <!--en ambos he utilizado los binding propios de Vue para los formularios,como el v-model para que sean reactivos
  el event prevent al iniciar el form, y conditional rendering  para controlar los input.
  Tambien he intentado utilizar BEM para nombrar las clases-->
  <div class="form-component">
    <form
      id="title-form"
      class="title-form"
      autocomplete="off"
      novalidate
      @submit.prevent="onEdit"
    >
      <div class="edit-hometitle">
        <label for="homeTitle" class="edit-title--label"
          >Edit Home Title:</label
        >
        <input
          id="homeTitle"
          type="text"
          class="edit-title--input"
          v-model="homeTitle"
          placeholder="Title"
        />
        <button
          type="submit"
          class="form__button-create"
          :disabled="this.homeTitle.length < 4"
          :class="this.homeTitle.length < 4 ? 'disabled' : ''"
        >
          Edit
        </button>
      </div>
    </form>

    <form
      id="form"
      class="form"
      autocomplete="off"
      novalidate
      @submit.prevent="onSubmit"
    >
      <div class="form-title"><h1>Create an User</h1></div>
      <div class="form_name">
        <label for="name" class="form__name--label">Username: </label>
        <input
          id="name"
          type="text"
          class="form__name--name-input"
          v-model="name"
          placeholder="name"
        />
      </div>
      <div class="form_coordinates">
        <h2>Coordinates</h2>
        <label for="longitude" class="form__longitude--label"
          >Longitude:
        </label>
        <input
          id="longitude"
          type="text"
          class="form__longitude--coordinates-input"
          v-model="longitude"
          placeholder="longitude"
        />
        <label for="latitude" class="form__latitude--label">Latitude: </label>
        <input
          id="latitude"
          type="text"
          class="form__latitude--coordinates-input"
          v-model="latitude"
          placeholder="latitude"
        />
      </div>
      <p class="message">{{ errorMessage }}</p>
      <button
        type="submit"
        class="form__button-create"
        :disabled="this.name.length < 3"
        :class="this.name.length < 3 ? 'disabled' : ''"
      >
        Create User
      </button>
    </form>
  </div>
</template>

<script>
/* He utilizado vuex para realizar el control de estado para el cambio de titulo, y la creación de usuario,
no obstante como no tenia un backend al hacer refresh los cambios y usuarios creados desaparecen */
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Form",
  // utilizo la data para controlar el form, y su estado.
  data() {
    return {
      name: "",
      latitude: "",
      longitude: "",
      homeTitle: "",
      errorMessage: "",
    };
  },
  computed: {
    ...mapState(["title", "users"]),
  },

  methods: {
    ...mapActions(["createNewUserAction", "editTitleAction"]),

    async onEdit() {
      if (this.title !== "") {
        const newTitle = this.homeTitle;
        this.editTitleAction(newTitle);
        // a traves de la action llamo a su mutación y cambio el state del titulo
      }
    },
    // comprobación de si los datos introducidos son correctos,
    // si no lo son activan el mensaje de error
    async onSubmit() {
      if (
        this.name !== "" &&
        this.latitude !== "" &&
        this.latitude < 90 &&
        this.latitude > -90 &&
        this.longitude !== "" &&
        this.longitude < 90 &&
        this.longitude > -90
      ) {
        // He decidido crear los nuevos usuarios como un objeto con propiedades, donde guardar la información
        const newUser = {
          id: this.users.length + 1, // Utilizo el length del array para dar una id unica, temporal
          name: this.name,
          coordinates: {
            // he decidido ordenar la longitud y latitud en un nivel mas de proundidad para tener mas organizado el objeto
            lng: this.longitude,
            lat: this.latitude,
          },
        };
        // añado los nuevos usuarios a traves de una acción al estado de usuarios que es un array
        this.createNewUserAction(newUser);
      } else {
        this.errorMessage = "The data is not valid try again"; // El mensaje aparecera cuando los datos sean invalidos
      }
    },
  },
});
</script>

<style>
.form-component {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #2c3e50;
  padding-bottom: 30px;
  width: 500px;
}
.edit-hometitle {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.edit-title--label {
  font-size: 30px;
  margin: 20px;
}
.edit-title--input {
  font-family: "Amatic SC", cursive;
  font-family: "Fuzzy Bubbles", cursive;
  font-family: "Supermercado One", cursive;
  border-radius: 20px;
  height: 20px;
  width: 180px;
  text-align: center;
  margin-bottom: 10px;
}
.form_coordinates {
  margin-top: 30px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.form__latitude--coordinates-input {
  font-family: "Amatic SC", cursive;
  font-family: "Fuzzy Bubbles", cursive;
  font-family: "Supermercado One", cursive;
  border-radius: 20px;
  height: 20px;
  width: 180px;
  text-align: center;
}
.form__longitude--coordinates-input {
  font-family: "Amatic SC", cursive;
  font-family: "Fuzzy Bubbles", cursive;
  font-family: "Supermercado One", cursive;
  border-radius: 20px;
  height: 20px;
  width: 180px;
  text-align: center;
}
.form__name--name-input {
  font-family: "Amatic SC", cursive;
  font-family: "Fuzzy Bubbles", cursive;
  font-family: "Supermercado One", cursive;
  margin-right: 80px;
  border-radius: 20px;
  height: 20px;
  width: 180px;
  text-align: center;
}
.form__button-create {
  font-family: "Amatic SC", cursive;
  font-family: "Fuzzy Bubbles", cursive;
  font-family: "Supermercado One", cursive;
  font-size: 20px;
  width: 140px;
  height: 35px;
  border-radius: 20px;
}
</style>
