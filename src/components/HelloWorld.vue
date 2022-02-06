<template>
  <nav class="menu">
    <div class="menu__home">
      <button>Home</button>
    </div>
    <div class="menu__form">
      <button>Create User</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
