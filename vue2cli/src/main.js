import Vue from "vue";
import App from "./App.vue";

export const bus = new Vue();

Vue.directive("customColor", {
  bind(el, binding, vnode) {
    el.style.color =
      "#" +
      Math.random()
        .toString()
        .slice(2, 8);
  }
});

Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value == "red") {
      el.style.color = "red";
    } else if (binding.value == "blue") {
      el.style.color = "blue";
    }
  }
});

//Filter
Vue.filter("toUpper", value => value.toUpperCase());

new Vue({
  el: "#app",
  render: h => h(App)
});
