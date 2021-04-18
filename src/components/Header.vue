<template>
  <div class="header">
    <div class="left_logo">
      <img src="https://static.toiimg.com/photo/72975551.cms" alt="chat img" />
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
export default {
  name: "Header",
};
</script>

<style>
.header {
  padding: 20px;
  text-align: center;
  background: #333;
  color: white;
  font-size: 30px;
  display: flex;
  height: 35px;
}
.right_btn {
  display: flex;
  justify-content: end;
  position: absolute;
  right: 10px;
  top: 10px;
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
}
.right_btn a {
  text-decoration: none;
  font-size: x-large;
}
</style>