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
  height: 30px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #2c3e50;
  margin-bottom: 30px;
  padding: 40px;
  padding-top: 10px;
}
.homeLink {
  font-size: 30px;
  padding: 10px;
  padding-right: 80px;
  text-decoration: none;
  color: #2c3e50;
}
.homeLink:hover {
  font-size: 35px;
}
.homeCreate {
  font-size: 30px;
  padding: 10px;
  padding-right: 80px;
  text-decoration: none;
  color: #2c3e50;
}
.homeCreate:hover {
  font-size: 35px;
}
</style>
