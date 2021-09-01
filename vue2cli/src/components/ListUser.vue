<template>
  <div class="list-user">
    <h1>{{ title }}</h1>
    <div class="lu-content">
      <div v-for="(user, index) in listUser" :key="index" class="user-item">
        <User :user="user" />
      </div>
    </div>
  </div>
</template>
<script>
import User from "./User.vue";
export default {
  name: "listUser",
  data() {
    return {
      listUser: [...Array(5)].map(() => Math.random())
    };
  },
  components: { User },
  props: {
    title: String
  }
};
</script>
