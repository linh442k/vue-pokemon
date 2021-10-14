import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import {ValidationObserver} from "vee-validate";
import {ValidationProvider} from "vee-validate/dist/vee-validate.full.esm";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.prototype.$pokemonApi="https://pokeapi.co/api/v2/pokemon/"
Vue.prototype.$pokemonListApi="https://pokeapi.co/api/v2/pokemon?"
Vue.prototype.$pokemonMaxStat=255

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
