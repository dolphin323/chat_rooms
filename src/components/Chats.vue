<template>
  <div class="chats_block">
    <div class="chats">
      <ChatList
        @chat-clicked="ChatInfoProps"
        v-if="display_list"
        v-bind:rooms="rooms"
      />
      <div class="no_list">
        <button class="left_chat" @click="LeftChat" v-if="!display_list">
          Left chat
        </button>
        <button
          class="delete_chat"
          @click="DeleteChat"
          v-if="display_owner_buttons"
        >
          Delete chat
        </button>
      </div>
      <Chat v-bind:messages="messages" v-if="display_chat" />
      <ChatInfo
        v-bind:members="members"
        v-bind:owner="owner"
        v-if="display_chat"
      />
      <div class="no_chat" v-if="!display_chat">
        <span>Choose chat</span>
      </div>
    </div>
  </div>
</template>

<script>
import ChatList from "@/components/chat_components/ChatList";
import Chat from "@/components/chat_components/Chat";
import ChatInfo from "@/components/chat_components/ChatInfo";
import {
  LEAVE_ROOM,
  USER_INFO,
  DELETE_ROOM,
  GET_ROOMS,
} from "@/graphql/graphql.js";

export default {
  name: "Chats",
  data() {
    return {
      messages: [],
      members: [],
      rooms: [],
      owner: "",
      display_chat: false,
      display_list: true,
      display_owner_buttons: false,
    };
  },
  apollo: {
    rooms: {
      query: GET_ROOMS,
    },
  },
  components: {
    ChatList,
    Chat,
    ChatInfo,
  },
  methods: {
    async LeftChat() {
      await this.$apollo.mutate({
        mutation: LEAVE_ROOM,
      });
      this.display_chat = false;
      this.display_list = true;
      this.display_owner_buttons = false;
    },
    async DeleteChat() {
      const user_info = await this.$apollo.query({
        query: USER_INFO,
      });
      await this.$apollo.mutate({
        mutation: DELETE_ROOM,
        variables: {
          id: user_info.data.me.currentRoom.id,
        },
      });
      this.display_chat = false;
      this.display_list = true;
      this.display_owner_buttons = false;
    },
    async ChatInfoProps(data) {
      const user_info = await this.$apollo.query({
        query: USER_INFO,
      });
      const info = data.data.joinRoom;
      this.messages = info.lastMessages;
      this.members = info.members;
      this.owner = info.owner;
      if (user_info.data.me.id === this.owner.id) {
        this.display_owner_buttons = true;
      }
      this.display_chat = true;
      this.display_list = false;
    },
  },
};
</script>

<style>
.no_chat {
  position: absolute;
  margin: auto;
  top: 45%;
  left: 50%;
  font-size: xxx-large;
}
.no_list {
  position: relative;
  top: 35%;
  left: 15%;
}
.left_chat {
  margin-bottom: 5px;
}
.left_chat,
.delete_chat {
  display: flex;
  justify-content: center;
  width: 60%;
  font-size: inherit;
  border: 2px solid;
  background-color: #cabdd5;
  padding: 15px;
  border-radius: 1em;
}
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
  border-radius: 2em;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  margin-top: 40px;
  overflow: hidden;
}
.chats {
  display: grid;
  grid-template-areas: "chat_list chat chat_info";
  grid-template-rows: 100%;
  grid-template-columns: 250px 1fr 350px;
  grid-gap: 10px;
  background-color: white;
  height: 100%;
}
</style>