import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "@popperjs/core"

createApp(App).use(store).use(router).mount("#app");
