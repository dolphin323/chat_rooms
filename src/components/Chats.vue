<template>
  <div class="chats_block">
    <div class="chats">
      <ChatList @chat-clicked="ChatInfoProps" />
      <Chat />
      <ChatInfo />
    </div>
  </div>
</template>

<script>
import ChatList from "@/components/chat_components/ChatList";
import Chat from "@/components/chat_components/Chat";
import ChatInfo from "@/components/chat_components/ChatInfo";
import { LEAVE_ROOM } from "@/graphql/graphql.js";

export default {
  name: "Chats",
  components: {
    ChatList,
    Chat,
    ChatInfo,
  },
  methods: {
    async ChatInfoProps(data) {
      console.log(data);
      const leaved_room = await this.$apollo.mutate({
        mutation: LEAVE_ROOM,
      });
      console.log(leaved_room);
    },
  },
};
</script>

<style>
.footer {
  display: none;
}
.chats_block {
  margin: 0;
  margin-top: 0px;
  margin-right: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  padding: 20px;
  padding-top: 20px;
  padding-top: 30px;
  width: 90%;
  height: 80%;
  border-radius: 1em;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  margin-top: 40px;
}

.chats {
  display: grid;
  grid-template-areas: "chat_list chat chat_info";
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 20% 1fr 15%;
  grid-gap: 10px;
  background-color: white;
}
</style>