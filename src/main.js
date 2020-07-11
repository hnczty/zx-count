import Vue from "vue";
import App from "./App.vue";
import count, { VabCount } from "./components/export.js";
Vue.use(count);
/* Vue.component("vab-count", VabCount); */
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
