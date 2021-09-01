<template>
  <div>demoBusComponent2 {{ title }}</div>
</template>
<script>
import { bus } from "../../main";

export default {
  name: "bus1",
  data() {
    return { title: "abc" };
  },
  created() {
    bus.$on("eventBus", (data) => {
      this.title = data;
    });
  },
};
</script>