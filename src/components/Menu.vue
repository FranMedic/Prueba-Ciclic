<template>
  <nav class="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/create-user">Create User</router-link>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Menu",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
