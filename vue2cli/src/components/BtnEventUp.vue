<template>
  <div>
    <button
      @click="() => this.$emit('changeTitle', { title: 'title is changed' })"
    >
      change title of listUser
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
