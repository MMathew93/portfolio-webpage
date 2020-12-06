import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

Vue.use(Buefy);
AOS.init();

new Vue({
  render: h => h(App)
}).$mount("#app");
