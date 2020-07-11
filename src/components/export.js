import VabCount from "./count.vue";
export default {
  install(Vue) {
    Vue.component("vab-count", VabCount);
  },
};
export { VabCount };
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("vab-count", VabCount);
}
