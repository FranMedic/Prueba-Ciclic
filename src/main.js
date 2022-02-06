import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

createApp(App).use(store).use(router).mount("#app");
