<template>
  <div>
    <h1 v-theme="'red'">{{ "Red" | toUpper }}</h1>
    <h1 v-theme="'blue'">Blue</h1>
    <ul v-for="(item, index) in titles" :key="index">
      <li v-customColor>Title - {{ index }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titles: [...Array(10)],
    };
  },
};
</script>