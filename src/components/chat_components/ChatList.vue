<template>
  <div class="chat_lists">
    <div class="chat_h2">
      <h2>Chats</h2>
    </div>
    <div class="chat_list">
      <div v-for="room in rooms" :key="room.id">
        <ChatListElement
          @join-chat="JoinChat"
          :chat_name="room.name"
          :chat_id="room.id"
          :owner_id="room.owner.id"
          :user_id="user_id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ChatListElement from "./chat_list_components/ChatListElement";
import { JOIN_ROOM } from "@/graphql/graphql.js";
import { USER_INFO } from "../../graphql/graphql";

export default {
  name: "ChatList",
  props: ["rooms", "user_id"],
  data() {
    return {
      active: false,
    };
  },
  components: {
    ChatListElement,
  },
  methods: {
    async JoinChat(chat_id) {
      const chat_info = await this.$apollo.mutate({
        mutation: JOIN_ROOM,
        variables: {
          id: chat_id,
        },
      });
      console.log("JOINED");
      const user_info = await this.$apollo.query({
        query: USER_INFO,
      });

      console.log(user_info);
      console.log("Current room");
      console.log(user_info.data.me.currentRoom);
      this.$emit("chat-clicked", {
        data: chat_info.data,
      });
    },
  },
};
</script>

<style scoped>
.chat_list {
  grid-area: chat_list;
  overflow-y: auto;
  height: 85%;
  position: absolute;
  width: 18%;
}
.chat_lists h2 {
  padding-top: 0px;
  margin-top: 0px;
}
.chat_list::-webkit-scrollbar {
  width: 15px;
}
.chat_list::-webkit-scrollbar-track {
  border: 7px solid #232943;
  box-shadow: inset 0 0 2.5px 2px rgba(0, 0, 0, 0);
}
.chat_list::-webkit-scrollbar-thumb {
  background: linear-gradient(#e66465, #9198e5);
  border-radius: 3px;
}
</style>