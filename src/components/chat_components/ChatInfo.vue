<template>
  <div class="chat_info">
    <h2>Chat creator</h2>
    <ChatOwner :owner="owner" :user_id="user_id" />
    <h2>Chat members</h2>
    <div v-for="member in members" :key="member.id">
      <ChatMemberElement :member="member" :user_id="user_id" />
    </div>
  </div>
</template>

<script>
import ChatMemberElement from "./chat_info_components/ChatMemberElement";
import ChatOwner from "./chat_info_components/ChatOwner";

export default {
  name: "ChatInfo",
  components: {
    ChatMemberElement,
    ChatOwner,
  },
  props: ["members", "owner", "user_id"],
  data() {
    return {
      me: {},
    };
  },
};
</script>


<style scoped>
.chat_info {
  grid-area: chat_info;
}
.chat_info h2 {
  margin-top: 0px;
}
</style>