<template>
  <div class="mess_wrap" :class="user_id === author.id ? 'own_message' : ''">
    <div class="message">
      <div class="author">{{ author.username }}</div>
      <div class="text">{{ mess }}</div>
      <div class="time">{{ messTime }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatElement",
  props: ["mess", "author", "messTime", "user_id"],
};
</script>

<style scoped>
.mess_wrap {
  width: inherit;
  display: grid;
  justify-content: left;
}
.mess_wrap.own_message {
  justify-content: right;
  text-align: end;
}
.message {
  background-color: rgb(163, 149, 163);
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 1em;
  overflow-wrap: anywhere;
  width: 200px;
}
.mess_wrap.own_message .message {
  background-color: lavender;
  margin-right: 1px;
}
</style>
