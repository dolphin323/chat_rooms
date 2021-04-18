<template>
  <div class="mess_wrap">
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
  props: ["mess", "author", "messTime"],
};
</script>

<style scoped>
.mess_wrap {
  width: inherit;
}
.message {
  background-color: rgb(163, 149, 163);
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 1em;
  overflow-wrap: anywhere;
  width: 200px;
}
</style>
