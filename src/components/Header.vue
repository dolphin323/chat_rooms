<template>
  <div class="header">
    <div class="left_logo">
      <img src="https://static.toiimg.com/photo/72975551.cms" alt="chat img" />
      <div class="create_chat">
        <button>Create chat</button>
        <button type="button" class="btn" @click="showModal">
          Open Modal!
        </button>
        <ModalCreateChat v-show="isModalVisible" @close="closeModal" />
      </div>
    </div>
    <div class="right_btn">
      <div class="link_login">
        <router-link to="/login">Log in</router-link>
      </div>
      <div class="link_registration">
        <router-link to="/registration">Sign up</router-link>
      </div>
      <div class="link_logout">
        <router-link to="/login">Logout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import { CREATE_ROOM } from "@/graphql/graphql.js";
import ModalCreateChat from "./chat_components/header_components/ModalCreateChat";
export default {
  name: "Header",
  components: {
    ModalCreateChat,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style>
.left_logo {
  display: flex;
}
.header {
  padding: 5px;
  text-align: center;
  background: #333;
  color: white;
  font-size: 30px;
  display: flex;
  height: 50px;
  justify-content: space-between;
}
.right_btn {
  display: flex;
  justify-content: center;
}
.left_logo img {
  width: 30px;
}
.link_login,
.link_registration,
.link_logout {
  padding: 10px;
  margin: 5px;
  margin-top: 0px;
  background-color: skyblue;
  border-radius: 1em;
  display: flex;
}
.right_btn a {
  text-decoration: none;
  font-size: x-large;
}
.create_chat button {
  margin: 5px;
  margin-top: 0px;
  border: 2px solid;
  background-color: #cabdd5;
  padding: 5px;
  border-radius: 1em;
}
</style>