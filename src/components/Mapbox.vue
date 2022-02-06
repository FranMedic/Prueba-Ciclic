<template>
  <div class="map">
    <p>HOLA IRENE</p>
    <div id="map"></div>
    <div></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import mapboxgl from "mapbox-gl";

export default defineComponent({
  name: "Map",
  components: {},
  data() {
    return {
      access_token: process.env.VUE_APP_ACCESS_TOKEN,
    };
  },

  computed: {
    ...mapState(["users"]),
  },

  methods: {
    async getMap() {
      mapboxgl.accessToken = this.access_token;
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-4, 40], // starting position [lng, lat]
        zoom: 2, // starting zoom
      });
      map.on("load", () => {
        new mapboxgl.Marker({ color: "red" })
          .setLngLat([2.171389, 41.387944])
          .addTo(map);
        new mapboxgl.Marker({ color: "blue" })
          .setLngLat([2.335092, 48.8612])
          .addTo(map);

        this.users.forEach((user) => {
          const data = `<h3>${user.name}</h3><p>Id:${user.id}</p><p>Longitud: ${user.coordinates.lng}</p><p>Latitud: ${user.coordinates.lat}</p>`;
          new mapboxgl.Marker({ color: "yellow" })
            .setLngLat([user.coordinates.lng, user.coordinates.lat])
            .setPopup(new mapboxgl.Popup().setHTML(data))
            .addTo(map);
        });

        map.addSource("spain", {
          type: "geojson",
          data: "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/ESP.geo.json",
        });
        map.addSource("france", {
          type: "geojson",
          data: "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/FRA.geo.json",
        });

        map.addLayer({
          id: "layer01",
          type: "fill",
          source: "spain",
          layout: {
            visibility: "visible",
          },
          paint: {
            "fill-color": "rgba(130, 230, 251, 0.8)",
          },
        });
        map.addLayer({
          id: "layer02",
          type: "fill",
          source: "france",
          layout: {
            visibility: "none",
          },
          paint: {
            "fill-color": "rgba(251, 135, 20, 0.8)",
          },
        });
      });
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
