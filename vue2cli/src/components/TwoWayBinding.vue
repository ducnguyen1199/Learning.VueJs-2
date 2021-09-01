<template >
  <div>
    <h1>TWO way binding</h1>
    <input file="type" v-model="input" />
    <input type="checkbox" value="thiSuu" v-model="checkboxs" />
    <input type="checkbox" value="congDuc" v-model="checkboxs" />
    <p>{{ input }}</p>
    <ul v-for="(item, index) in checkboxs" :key="index">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      checkboxs: [],
    };
  },
};
</script>
<style >
</style>