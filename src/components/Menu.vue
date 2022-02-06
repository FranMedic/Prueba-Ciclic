<template>
  <nav class="menu">
    <router-link class="homeLink" to="/">Home</router-link>
    <router-link class="homeCreate" to="/create-user"
      >Create and Edit</router-link
    >
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Menu",
});
</script>

<style scoped>
.menu {
  width: 100vw;
  height: 30px;
  display: flex;
  justify-content: center;

  margin-bottom: 30px;
  padding: 20px;
}
.homeLink {
  font-size: 30px;
  padding: 20px;
  padding-right: 80px;
}
.homeCreate {
  font-size: 30px;
  padding: 20px;
  padding-right: 80px;
}
</style>
