<template>
  <div class="home">
    <h1>Welcome to Ciclica Map</h1>
    <h2>Explore the map, or create your own marks</h2>
    <div class="map">
      <Mapbox />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Mapbox from "@/components/Mapbox.vue";

export default defineComponent({
  name: "Home",
  components: {
    Mapbox,
  },
});
</script>
