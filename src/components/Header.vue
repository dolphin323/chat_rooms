<template>
  <div class="header">
    <div class="left_logo" v-if="isCreateButtonVisible">
      <div class="create_chat">
        <button type="button" class="btn button" @click="showModal">
          <span class="button__line button__line--top"></span>
          <span class="button__line button__line--right"></span>
          <span class="button__line button__line--bottom"></span>
          <span class="button__line button__line--left"></span>
          Create chat
        </button>
        <div class="vertical">|</div>
        <ModalCreateChat v-show="isModalVisible" @close="closeModal" />
      </div>
    </div>
    <div class="right_btn">
      <div class="link_login" v-if="isLoginButtonVisible">
        <router-link to="/login" class="button">
          <span class="button__line button__line--top"></span>
          <span class="button__line button__line--right"></span>
          <span class="button__line button__line--bottom"></span>
          <span class="button__line button__line--left"></span>Log
          in</router-link
        >
      </div>

      <div class="link_registration" v-if="isRegistrationButtonVisible">
        <div class="vertical_1" v-if="isLoginButtonVisible">|</div>
        <router-link to="/registration" class="button">
          <span class="button__line button__line--top"></span>
          <span class="button__line button__line--right"></span>
          <span class="button__line button__line--bottom"></span>
          <span class="button__line button__line--left"></span>Sign
          up</router-link
        >
      </div>
      <div class="link_logout" v-if="isLogoutButtonVisible">
        <a href="/login" class="button logout" @click.prevent="LogOut">
          <span>
            <span class="button__line button__line--top"></span>
            <span class="button__line button__line--right"></span>
            <span class="button__line button__line--bottom"></span>
            <span class="button__line button__line--left"></span>
            Logout
          </span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import ModalCreateChat from "./chat_components/header_components/ModalCreateChat";
import { onLogout } from "./../vue-apollo";
export default {
  name: "Header",
  components: {
    ModalCreateChat,
  },
  data() {
    return {
      isModalVisible: false,
      isCreateButtonVisible: true,
      isLogoutButtonVisible: true,
      isLoginButtonVisible: true,
      isRegistrationButtonVisible: true,
    };
  },

  created() {
    if (
      this.$router.currentRoute.path === "/login" ||
      this.$router.currentRoute.path === "/registration"
    ) {
      this.isLoginButtonVisible = true;
      this.isRegistrationButtonVisible = true;
      this.isCreateButtonVisible = false;
      this.isLogoutButtonVisible = false;
    }
    if (this.$router.currentRoute.path === "/chats") {
      this.isLoginButtonVisible = false;
      this.isRegistrationButtonVisible = false;
      this.isCreateButtonVisible = true;
      this.isLogoutButtonVisible = true;
    }
  },
  watch: {
    $route(to) {
      if (to.path === "/login" || to.path === "/registration") {
        this.isLoginButtonVisible = true;
        this.isRegistrationButtonVisible = true;
        this.isCreateButtonVisible = false;
        this.isLogoutButtonVisible = false;
        console.log("Login or registration");
      } else if (to.path === "/chats") {
        this.isLoginButtonVisible = false;
        this.isRegistrationButtonVisible = false;
        this.isCreateButtonVisible = true;
        this.isLogoutButtonVisible = true;
        console.log("Chats");
      } else {
        this.isLoginButtonVisible = true;
        this.isRegistrationButtonVisible = true;
        this.isCreateButtonVisible = false;
        this.isLogoutButtonVisible = false;
      }
    },
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async LogOut() {
      console.log("Here");
      this.isCreateButtonVisible = false;
      this.isLogoutButtonVisible = false;
      this.isLoginButtonVisible = true;
      this.isRegistrationButtonVisible = true;
      await onLogout(this.$apollo.provider.defaultClient);
      await this.$apollo.provider.defaultClient.resetStore();
      console.log("To login");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.link_logout {
  display: flex;
}
.vertical,
.vertical_1 {
  padding-top: 6px;
}
.button {
  position: relative;
  color: #f4d8f7;
  overflow: hidden;
  padding: 5px;
  border: 0px solid;
  border-radius: 1rem;
  font: unset;
}
.button.logout {
  padding-top: 8px;
  margin-left: 5px;
}
.button__line {
  position: absolute;
  display: block;
  height: 2px;
}
.button__line--top {
  top: 0;
  width: 100%;
  left: -100%;
  background: linear-gradient(90deg, transparent, #6f08c9);
}
.button:hover .button__line--top {
  left: 100%;
  transition: 1s;
  transition-delay: 0.25s;
}
.button__line--bottom {
  bottom: 0;
  width: 100%;
  right: -100%;
  background: linear-gradient(270deg, transparent, #6f08c9);
}
.button:hover .button__line--bottom {
  right: 100%;
  transition: 1s;
  transition-delay: 0.25s;
}
.button__line--left {
  bottom: -100%;
  width: 2px;
  height: 100%;
  left: 0;
  background: linear-gradient(0deg, transparent, #6f08c9);
}
.button:hover .button__line--left {
  bottom: 100%;
  transition: 1s;
  transition-delay: 0.25s;
}
.button__line--right {
  top: -100%;
  width: 2px;
  height: 100%;
  right: 0;
  background: linear-gradient(180deg, transparent, #6f08c9);
}
.button:hover .button__line--right {
  top: 100%;
  transition: 1s;
  transition-delay: 0.25s;
}
.button:hover {
  box-shadow: 0 0 10px #6f08c9, 0 0 40px #6f08c9;
  /* background-color: #4c4c4d; */
  color: white;
  transition: 0.4s;
}

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
  justify-content: center;
}
.right_btn {
  display: flex;
  justify-content: center;
}
.left_logo img {
  width: 30px;
}
/* .link_login,
.link_registration{
  padding: 10px;
  margin: 5px;
  margin-top: 0px;
  background-color: skyblue;
  border-radius: 1em;
  display: flex;
} */
.right_btn a {
  text-decoration: none;
}
.create_chat button {
  /* margin: 5px;
  margin-top: 0px;
  border: 2px solid;
  background-color: #cabdd5;
  padding: 5px;
  border-radius: 1em; */
  background: transparent;
  margin-right: 5px;
}
</style>