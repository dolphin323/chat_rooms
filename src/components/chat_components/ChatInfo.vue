<template>
  <div class="chat_info">{{ chat_info }}</div>
</template>

<script>
export default {
  name: "ChatInfo",
  props: ["chat_info"],
};
</script>


<style scoped>
.chat_info {
  grid-area: chat_info;
}
</style>