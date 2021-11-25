import Vue from "vue";
import "bulma/css/bulma.css";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

import App from "./App.vue";

Vue.component("v-icon", Icon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
