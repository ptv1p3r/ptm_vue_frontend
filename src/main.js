import Vue from "vue";
import App from "./App";
import router from "./router/index";
import vuetify from '@/plugins/vuetify' // path to vuetify export
import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);

/* eslint-disable no-new */
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
