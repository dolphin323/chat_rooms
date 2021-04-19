<template>
  <div class="chat_list_element">
    <div v-bind:class="'info ' + active" @click="$emit('join-chat', chat_id)">
      <img src="https://static.toiimg.com/photo/72975551.cms" alt="chat img" />
      <span>{{ chat_name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatListElement",
  props: ["chat_name", "chat_id"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    ShowChat() {
      console.log(this.chat_id);
    },
  },
};
</script>

<style scoped>
.chat_list_element {
  width: inherit;
}
.chat_list_element:hover,
.info.true {
  background-color: rgb(242, 225, 245);
}
.chat_list_element .info img {
  width: 40px;
  height: 40px;
  border-radius: 2em;
}
.chat_list_element .info span {
  padding-left: 10px;
  font-size: x-large;
  padding-top: 3px;
}

.chat_list_element .info {
  display: inline-flex;
}
</style>
