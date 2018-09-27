import Vue from "vue";

import App    from "./App.vue";
import router from "./router.js";
import store  from "./data-store.js";

import api from "./api.js";
console.log(api);
window.api = api;

import "./assets/main.scss";

Vue.config.productionTip = false

// Update twots every 30 seconds.
window.setInterval(() => store.methods.updateTwots(), 30*1000);


Promise.all([
  store.methods.updateTwots(),
  store.methods.updateTwotterers()
])
  .then(() => {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app")
  });