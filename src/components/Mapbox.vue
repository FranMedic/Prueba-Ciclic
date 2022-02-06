<template>
  <div class="map">
    <p>HOLA IRENE</p>
    <div id="map"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import mapboxgl from "mapbox-gl";

export default defineComponent({
  name: "Map",
  components: {},
  data() {
    return {
      access_token: process.env.VUE_APP_ACCESS_TOKEN,
    };
  },

  methods: {
    async getMap() {
      mapboxgl.accessToken = this.access_token;
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
      map.on("load", () => {});
    },
  },

  mounted() {
    this.getMap();
  },
});
</script>

<style scoped>
#map {
  height: 500px;
}
</style>
