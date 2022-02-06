<template>
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
          :disabled="this.homeTitle.length < 5"
          :class="this.homeTitle.length < 5 ? 'disabled' : ''"
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
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Form",
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
      }
    },

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
        const newUser = {
          id: this.users.length + 1,
          name: this.name,
          coordinates: {
            lng: this.longitude,
            lat: this.latitude,
          },
        };
        this.createNewUserAction(newUser);
      } else {
        this.errorMessage = "The data is not valid try again";
      }
    },
  },
});
</script>

<style></style>
