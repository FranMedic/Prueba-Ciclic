<template>
  <div class="map">
    <!--Los dos botones eran para cambiar entre layers, pero no fui capaz relacionarlos con los elementos del mapbox,
    para tooglear entre la visibility de ambas layers-->
    <button class="button-home" @click="selectLayer01">Spain</button>
    <button class="button-home" @click="selectLayer02">France</button>
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
      // utilice un archivo .env para guardar el token,
      // aunque lo he subido a github para que puedan ver bien la aplicación,
      // conozco que ese archivo debe añadirse al gitignore.
      access_token: process.env.VUE_APP_ACCESS_TOKEN,
    };
  },
  // traigo el state de users, para poder crear los nuevos markers a partir del array
  computed: {
    ...mapState(["users"]),
  },

  methods: {
    async getMap() {
      // Inicio el mapa y configuro las caracteristicas iniciales
      mapboxgl.accessToken = this.access_token;
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-4, 40],
        zoom: 2,
      });
      map.on("load", () => {
        // añado los dos marker fijos, les añado un popup con html incluido
        new mapboxgl.Marker({ color: "red" })
          .setLngLat([2.171389, 41.387944])
          .setPopup(new mapboxgl.Popup().setHTML("<h3>Texto de ejemplo</h3>"))
          .addTo(map);
        new mapboxgl.Marker({ color: "blue" })
          .setLngLat([2.335092, 48.8612])
          .setPopup(new mapboxgl.Popup().setHTML("<h3>Tengo hambre</h3>"))
          .addTo(map);

        // atraves de un for each recorro el array de users donde guardo los nuevos usuarios,
        // y por cada elemento, creo un nuevo marker, con los datos del usuario guardados

        this.users.forEach((user) => {
          const data = `<h3>${user.name}</h3><p>Id:${user.id}</p><p>Longitud: ${user.coordinates.lng}</p><p>Latitud: ${user.coordinates.lat}</p>`;
          new mapboxgl.Marker({ color: "yellow" })
            .setLngLat([user.coordinates.lng, user.coordinates.lat])
            .setPopup(new mapboxgl.Popup().setHTML(data)) // he decidido guardar la string en una constante aparte para poder leer mejor el codigo
            .addTo(map);
        });

        map.addSource("spain", {
          // para realizar los layers decidid seguir los ejemplos en los documentos, para obtener la source,
          // aun asi me fue dificil terminar de entender bien los diferentes tipos de source y lo que era exactamente geojson
          type: "geojson",
          data: "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/ESP.geo.json",
        });
        map.addSource("france", {
          type: "geojson",
          data: "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/FRA.geo.json",
        });

        // añadi 2 layers, y las hice ambas visibles ya que no fui capaz de tooglear entre ellas
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
            visibility: "visible",
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
  margin-top: 25px;
  border: 3px solid #2c3e50;
  border-radius: 20px;
  display: flex;
  justify-content: center;
}
.button-home {
  width: 80px;
  padding: 10px;
  margin-right: 10px;
  border: none;
  background-color: #52f561;
  font-family: "Amatic SC", cursive;
  font-family: "Fuzzy Bubbles", cursive;
  font-family: "Supermercado One", cursive;
  font-size: 20px;
  border-radius: 20px;
  color: #2c3e50;
}
.button-home:hover {
  width: 87px;
  font-size: 23px;
}
</style>
