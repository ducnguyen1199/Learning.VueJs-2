<template>
  <div>
    <button @click="clickRef">click choose select file</button>
    <input type="file" ref="file-input" style="display: none" />
  </div>
</template>
<script>
export default {
  methods: {
    clickRef() {
      console.log(this.$refs["file-input"].click());
    },
  },
};
</script>
<style>
</style>