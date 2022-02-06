<template>
  <Menu />
  <Form />
</template>

<script>
import Menu from "@/components/Menu.vue";
import Form from "@/components/Form.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Create-user",
  components: {
    Menu,
    Form,
  },
});
</script>

<style></style>
