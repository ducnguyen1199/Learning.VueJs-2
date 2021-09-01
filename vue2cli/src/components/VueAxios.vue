<template >
  <div>
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
    <button @click.prevent="postData">post data</button>
    <ul v-for="(item, index) in listUsers" :key="index">
      <li>
        <button @click="deleteData(item)">x</button> - {{ item.username }} -
        {{ item.password }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      listUsers: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("https://6098e31e99011f001713f9b5.mockapi.io/login")
        .then((rs) => {
          this.listUsers = rs.data;
        });
    },
    postData() {
      const { username, password } = this;
      axios
        .post("https://6098e31e99011f001713f9b5.mockapi.io/login", {
          username,
          password,
        })
        .then(() => {
          this.getData();
        });
    },
    deleteData(data) {
      axios
        .delete(`https://6098e31e99011f001713f9b5.mockapi.io/login/${data.id}`)
        .then(() => {
          this.getData();
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style >
</style>