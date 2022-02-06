<template>
  <Menu />
  <div class="home">
    <h1>{{ this.title }}</h1>
    <h2>Explore the map, or create your own marks</h2>
    <div class="map">
      <Mapbox />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import Menu from "@/components/Menu.vue";
import Mapbox from "@/components/Mapbox.vue";

export default defineComponent({
  name: "Home",
  components: {
    Mapbox,
    Menu,
  },
  computed: {
    ...mapState(["title"]),
  },
});
</script>
