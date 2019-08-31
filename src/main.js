import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import VueMarkdown from "vue-markdown";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueMarkdown);

new Vue({
  render: h => h(App)
}).$mount("#app");
