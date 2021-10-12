import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.config.productionTip = false;

// Custom directives

// One of the ways of applying directives

// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString().slice(2, 8);
//   }
// });

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = '1200px';
    }
    else if (binding.value == 'narrow') {
      el.style.maxWidth = '560px';
    }
  }
});

// One of the ways of applying filters

// Vue.filter('snippet', function(value) {
//   return value.slice(0, 100) + '...';
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
