<template>
  <div>
    <div class="chat_list">
      <h2>Chats</h2>
      <div v-for="room in rooms" :key="room.id">
        <ChatListElement
          @join-chat="JoinChat"
          :chat_name="room.name"
          :chat_id="room.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ChatListElement from "./chat_list_components/ChatListElement";
import { GET_ROOMS, JOIN_ROOM } from "@/graphql/graphql.js";

export default {
  name: "ChatList",
  data() {
    return {
      rooms: [],
      active: false,
    };
  },
  apollo: {
    rooms: {
      query: GET_ROOMS,
    },
  },
  components: {
    ChatListElement,
  },
  methods: {
    async JoinChat(chat_id) {
      console.log(chat_id);
      const chat_info = await this.$apollo.mutate({
        mutation: JOIN_ROOM,
        variables: {
          id: chat_id,
        },
      });
      this.$emit("chat-clicked", {
        chat_info: chat_info,
      });
    },
  },
};
</script>

<style scoped>
.chat_list {
  grid-area: chat_list;
}
.chat_list h2 {
  margin-top: 0px;
}
</style>