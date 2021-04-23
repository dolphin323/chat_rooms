<template>
  <div class="login">
    <div class="block">
      <span class="log_title">Login</span>
      <div class="error" v-if="error">No user with such data</div>
      <form class="login_form" @submit.prevent="LoginUser">
        <div class="form_group">
          <p>Login</p>
          <input
            type="text"
            class="form_control"
            v-model="login"
            placeholder=""
            required
          />
        </div>
        <div class="form_group">
          <p>Password</p>
          <input
            type="password"
            class="form_control"
            v-model="password"
            placeholder=""
            required
          />
        </div>
        <div class="form_btn">
          <button class="login_btn btn">Login</button>
        </div>
      </form>
    </div>
  </div>
</template> 

<script>
import { LOGIN, CHECK_USERNAME } from "@/graphql/graphql.js";
import { onLogin } from "./../vue-apollo";

export default {
  name: "Login",
  data() {
    return {
      login: "",
      password: "",
      exists: false,
      token: "",
      error: false,
    };
  },
  methods: {
    async LoginUser() {
      try {
        const answer = await this.$apollo.query({
          query: CHECK_USERNAME,
          variables: {
            username: this.login,
          },
        });
        if (answer.data.exists) {
          const token = await this.$apollo.query({
            query: LOGIN,
            variables: {
              username: this.login,
              password: this.password,
            },
          });
          await onLogin(this.$apollo.provider.defaultClient, token.data.token);
          this.error = false;
          this.$router.push("/chats");
        } else {
          this.error = true;
        }
      } catch (err) {
        this.error = true;
      }
    },
  },
};
</script>

<style>
.error {
  margin-top: 5px;
  font-size: 20px;
  color: rgb(190, 37, 37);
  text-align: center;
}
.link_login,
.link_registration {
  display: flex;
}
.footer {
  display: block;
}
</style>


<style scoped>
.login .block {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  padding: 20px;
  padding-top: 30px;
  width: 300px;
  border-radius: 1em;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.login .block .login_form {
  margin-top: 20px;
}
.log_title {
  font-size: xx-large;
}

.form_control {
  width: 90%;
  padding: 6px;
  border-color: rgb(216, 216, 216);
  border-radius: 0.1rem;
}
.form_control:hover {
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}
.form_control:active,
.form_control:focus {
  box-shadow: 0 0 15px 4px rgb(218, 215, 221);
  border-color: white;
}
.form_btn {
  display: flex;
  justify-content: center;
}
.btn {
  outline: none;
  padding: 0.3em 1.2em;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  margin-top: 15px;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #181717;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
  font-size: x-large;
}
.btn:hover {
  border-color: rgb(43, 43, 43);
}
</style>