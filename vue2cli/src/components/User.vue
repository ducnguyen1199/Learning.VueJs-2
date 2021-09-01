<template>
  <div class="user">
    {{ user }}
  </div>
</template>
<script>
export default {
  name: "user",
  props: {
    // user: Number
    user: {
      type: Number,
      default: "giá trị mặc định khi k dc truyền"
    }
  }
};
</script>
