<template>
  <div>
    <ModalChangeRoomName v-show="isModalVisible" @close="closeModal" />
    <div class="chats_block">
      <div class="chats">
        <ChatList
          v-if="display_list"
          @chat-clicked="ChatInfoProps"
          v-bind:rooms="rooms"
          :user_id="me.id"
        />

        <div class="no_list">
          <h2 v-if="!display_list">{{ current_room_name }}</h2>
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
          <button
            class="rename_chat btn"
            @click="showModal"
            v-if="display_owner_buttons"
          >
            Rename chat
          </button>
        </div>
        <Chat v-bind:messages="messages" v-if="display_chat" :user_id="me.id" />
        <ChatInfo
          v-bind:members="members"
          v-bind:owner="owner"
          v-if="display_chat"
          :user_id="me.id"
        />
        <div class="no_chat" v-if="!display_chat">
          <span>Choose chat</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatList from "@/components/chat_components/ChatList";
import Chat from "@/components/chat_components/Chat";
import ChatInfo from "@/components/chat_components/ChatInfo";
import ModalChangeRoomName from "@/components/ModalChangeRoomName";
import {
  LEAVE_ROOM,
  USER_INFO,
  DELETE_ROOM,
  GET_ROOMS,
  SUB_ROOM_CREATED,
  SUB_ROOM_DELETED,
  // SUB_MEMBER_JOINED,
  SUB_ROOM_CHANGED,
  SUB_ROOM_UPDATED,
  //UPDATE_ROOM,
} from "@/graphql/graphql.js";

export default {
  name: "Chats",
  data() {
    return {
      messages: [],
      members: [],
      rooms: [],
      owner: "",
      me: {},
      display_chat: false,
      display_list: true,
      display_owner_buttons: false,
      isModalVisible: false,
      current_room_name: "",
    };
  },
  apollo: {
    rooms: {
      query: GET_ROOMS,
    },
    $subscribe: {
      create_rooms: {
        query: SUB_ROOM_CREATED,
        result({ data }) {
          this.rooms.push(data.roomCreated);
        },
      },
      delete_room: {
        query: SUB_ROOM_DELETED,
        result({ data }) {
          const index = this.rooms.indexOf(data.roomDeleted);
          this.rooms.splice(index, 1);
        },
      },
      rename_room: {
        query: SUB_ROOM_UPDATED,
        result({ data }) {
          console.log(data);
          this.current_room_name = data.roomUpdated.name;
        },
      },
      change_room: {
        query: SUB_ROOM_CHANGED,
        result({ data }) {
          console.log("Here");
          console.log(data);
          // const user_info = await this.$apollo.query({
          //   query: USER_INFO,
          // });
          // const info = data.data.joinRoom;
          // this.messages = info.lastMessages;
          // this.members = info.members;
          // this.owner = info.owner;
          // if (user_info.data.me.id === this.owner.id) {
          //   this.display_owner_buttons = true;
          // }
          // this.display_chat = true;
          // this.display_list = false;
        },
      },
    },
  },
  components: {
    ChatList,
    Chat,
    ChatInfo,
    ModalChangeRoomName,
  },
  async created() {
    const me = await this.$apollo.query({
      fetchPolicy: "no-cache",
      query: USER_INFO,
    });
    console.log(`me`, me.data.me);
    if (me.data.me.currentRoom) {
      await this.OpenChat(me);
    }
    console.log(`room`, me.data.me.currentRoom);
    this.me = me.data.me;
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async LeftChat() {
      const user_info = await this.$apollo.query({
        query: USER_INFO,
      });
      console.log(user_info);
      await this.$apollo.mutate({
        mutation: LEAVE_ROOM,
      });
      this.display_chat = false;
      this.display_list = true;
      this.display_owner_buttons = false;
    },
    async DeleteChat() {
      const user_info = await this.$apollo.query({
        fetchPolicy: "no-cache",
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
    async OpenChat(data) {
      const user_info = await this.$apollo.query({
        query: USER_INFO,
      });
      const info = data.data.me.currentRoom;
      console.log(data);
      this.messages = info.lastMessages;
      this.members = info.members;
      this.owner = info.owner;
      this.current_room_name = info.name;
      if (user_info.data.me.id === this.owner.id) {
        this.display_owner_buttons = true;
      }
      this.display_chat = true;
      this.display_list = false;
    },
    async ChatInfoProps(data) {
      const user_info = await this.$apollo.query({
        query: USER_INFO,
      });

      const info = data.data.joinRoom;
      this.current_room_name = info.name;
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
.link_logout,
.create_chat {
  display: flex;
}
.link_login,
.link_registration {
  display: none;
}
.footer {
  display: none;
}
.no_chat {
  position: absolute;
  margin: auto;
  top: 45%;
  left: 50%;
  font-size: xxx-large;
}
.no_list {
  position: relative;
  top: 20%;
  left: 15%;
}
.left_chat,
.delete_chat {
  margin-bottom: 5px;
}
.left_chat,
.delete_chat,
.rename_chat {
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