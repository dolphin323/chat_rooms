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
}
.right_btn {
  display: flex;
  justify-content: end;
}
.left_logo img {
  width: 30px;
}
</style>