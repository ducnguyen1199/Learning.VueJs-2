<template>
  <div class="">
    <div>demoBusComponent1 {{ title }}</div>
    <button @click="eventBus">change title</button>
  </div>
</template>
<script>
import { bus } from "../../main";
export default {
  name: "bus1",
  props: {
    title: {
      type: String,
    },
  },
  methods: {
    eventBus() {
      this.title = "abc";
      bus.$emit("eventBus", "component2 changed");
    },
  },
};
</script>