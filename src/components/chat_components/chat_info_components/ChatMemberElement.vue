<template>
  <div class="chat_member">
    <img src="https://static.toiimg.com/photo/72975551.cms" alt="chat img" />
    <span
      >{{ member.username }} {{ user_id === member.id ? "(you)" : "" }}</span
    >
  </div>
</template>

<script>
export default {
  name: "ChatMemberElement",
  props: ["member", "user_id"],
};
</script>

<style scoped>
.chat_member img {
  width: 40px;
  height: 40px;
  border-radius: 2em;
}
.chat_member span {
  padding-left: 10px;
  padding-top: 3px;
  font-size: x-large;
}

.chat_member {
  display: inline-flex;
}
</style>