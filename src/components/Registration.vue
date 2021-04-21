<template>
  <div class="registration">
    <div class="block">
      <span class="reg_title">Registration</span>
      <form class="registration_form" @submit.prevent="RegistrUser">
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
        <div class="form_group">
          <p>Confirm password</p>
          <input
            type="password"
            class="form_control"
            v-model="confirm_password"
            placeholder=""
            requireds
          />
        </div>
        <h2 v-if="!IsPasswordSame">Passwords are different</h2>
        <h2 v-if="IsUserExists">Choose another login</h2>
        <div class="form_btn">
          <button class="registration_btn btn">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template> 

<script>
import { CHECK_USERNAME, LOGIN, REGISTER } from "@/graphql/graphql";
import { onLogin } from "./../vue-apollo";
export default {
  name: "Registration",
  data() {
    return {
      login: "",
      password: "",
      confirm_password: "",
      IsUserExists: false,
      IsPasswordSame: true,
    };
  },
  methods: {
    async RegistrUser() {
      try {
        const answer = await this.$apollo.query({
          query: CHECK_USERNAME,
          variables: {
            username: this.login,
          },
        });
        if (answer.data.exists) {
          console.log("change name");
          this.IsUserExists = true;
          this.IsPasswordSame = true;
        } else if (this.password !== this.confirm_password) {
          console.log("passwords are different");
          this.IsPasswordSame = false;
          this.IsUserExists = false;
        } else {
          this.IsUserExists = false;
          this.IsPasswordSame = true;
          await this.$apollo.query({
            query: REGISTER,
            variables: {
              username: this.login,
              password: this.password,
            },
          });
          //console.log("Registrated!!");
          const token = await this.$apollo.query({
            query: LOGIN,
            variables: {
              username: this.login,
              password: this.password,
            },
          });
          onLogin(this.$apollo.provider.defaultClient, token.data.token);
          this.$router.push("/chats");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
/* .link_logout,
.create_chat {
  display: none;
} */
</style>

<style scoped>
.registration .block {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  padding: 20px;
  padding-top: 30px;
  width: 300px;
  /* height: 450px; */
  border-radius: 1em;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.registration .block .registration_form {
  margin-top: 20px;
}
.reg_title {
  font-size: xx-large;
}
.form_btn {
  display: flex;
  justify-content: center;
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
.btn {
  padding: 0.3em 1.2em;
  margin-top: 15px;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
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