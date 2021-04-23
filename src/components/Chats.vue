<template>
  <div>
    <ModalChangeRoomName
      v-show="isModalVisible"
      @close="closeModal"
      :current_room_name="current_room_name"
    />
    <div class="chats_block">
      <div class="chats">
        <ChatList
          v-if="display_list"
          @chat-clicked="ChatInfoProps"
          v-bind:rooms="rooms"
          :user_id="me.id"
        />
        <div class="no_list" ref="infoBox">
          <div v-if="!display_list">
            <div id="two" class="text-container">
              <span
                ref="infoBoxText"
                :class="width_box <= width_box_text ? 'animate' : ''"
                >{{ current_room_name }}</span
              >
              <div class="fader fader-left"></div>
              <div class="fader fader-right"></div>
            </div>
          </div>
          <div class="chat_buttons">
            <div class="outer" v-if="!display_list">
              <button class="left_chat" @click="LeftChat">Left chat</button>
            </div>
            <div class="outer" v-if="display_owner_buttons">
              <button class="delete_chat" @click="DeleteChat">
                Delete chat
              </button>
            </div>
            <div class="outer" v-if="display_owner_buttons">
              <button class="rename_chat btn" @click="showModal">
                Rename chat
              </button>
            </div>
          </div>
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
  SUB_MEMBER_JOINED,
  //SUB_ROOM_CHANGED,
  SUB_ROOM_UPDATED,
  SUB_MEMBER_LEFT,
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
      width_box: 0,
      width_box_text: 300,
    };
  },
  apollo: {
    $subscribe: {
      create_rooms: {
        query: SUB_ROOM_CREATED,
        result({ data }) {
          this.rooms.push(data.roomCreated);
        },
      },
      delete_room: {
        query: SUB_ROOM_DELETED,
        async result({ data }) {
          let right_index = -1;
          this.rooms.forEach((item, index) =>
            item.id === data.roomDeleted.id ? (right_index = index) : ""
          );
          this.rooms.splice(right_index, 1);
          const me = await this.$apollo.query({
            fetchPolicy: "no-cache",
            query: USER_INFO,
          });
          if (data.roomDeleted.id === me.data.me.currentRoom.id) {
            this.display_chat = false;
            this.display_list = true;
          }
        },
      },
      rename_room: {
        query: SUB_ROOM_UPDATED,
        result({ data }) {
          if (data.roomUpdated.owner.id === this.me.id) {
            this.current_room_name = data.roomUpdated.name;
          }
          const new_rooms = this.rooms.map((item) => {
            item.id === data.roomUpdated.id ? (item = data.roomUpdated) : item;
            return item;
          });
          this.rooms = new_rooms;
        },
      },
      joined_room: {
        query: SUB_MEMBER_JOINED,
        result({ data }) {
          this.members.push(data.memberJoined);
        },
      },
      left_room: {
        query: SUB_MEMBER_LEFT,
        result({ data }) {
          let right_index = -1;
          this.members.forEach((item, index) =>
            item.id === data.memberLeft.id ? (right_index = index) : ""
          );
          this.members.splice(right_index, 1);
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
  async updated() {
    if (this.$refs.infoBoxText) {
      this.width_box_text = this.$refs.infoBoxText.clientWidth;
    }
  },
  async created() {
    const me = await this.$apollo.query({
      fetchPolicy: "no-cache",
      query: USER_INFO,
    });
    if (me.data.me.currentRoom) {
      await this.OpenChat(me);
      this.width_box_text = this.$refs.infoBoxText.clientWidth;
    }
    const rooms = await this.$apollo.query({
      query: GET_ROOMS,
    });
    this.rooms = rooms.data.rooms;
    this.me = me.data.me;
    this.width_box = this.$refs.infoBox.clientWidth;
  },
  methods: {
    async showModal() {
      const me = await this.$apollo.query({
        fetchPolicy: "no-cache",
        query: USER_INFO,
      });
      this.current_room_name = me.data.me.currentRoom.name;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
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
        fetchPolicy: "no-cache",
        query: USER_INFO,
      });
      this.ChangeData(user_info, data.data.me.currentRoom);
    },
    async ChatInfoProps(data) {
      const user_info = await this.$apollo.query({
        fetchPolicy: "no-cache",
        query: USER_INFO,
      });
      this.ChangeData(user_info, data.data.joinRoom);
    },
    ChangeData(user_info, info) {
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
.outer {
  padding: 2px;
  border-radius: 1em;
  width: 60%;
  background: linear-gradient(
    45deg,
    #fb0094,
    #00f,
    #0f6,
    #ff0,
    #f00,
    #fb0094,
    #00f,
    #0f0,
    #ff0,
    #f00
  );
  opacity: 0.95;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
  margin-bottom: 10px;
}
.outer:hover {
  opacity: 1;
}

/* .outer:hover {
  animation: rotate 1.5s linear infinite;
}
@keyframes rotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
} */

#two {
  padding-left: 20px;
  padding-right: 15px;
  overflow: hidden;
}

.text-container {
  padding: 5px 10px;
  min-width: 0;
  font-size: 2rem;
  color: #708090;
  white-space: nowrap;
  overflow: visible;
  position: relative;
  border: 1px solid #708090;
  border-radius: 5px;
  margin-bottom: 5px;
}

.text-container span {
  display: inline-block;
}

.text-container .animate:hover {
  position: relative;
  animation: leftright 2s infinite alternate linear;
}
@keyframes leftright {
  0%,
  20% {
    transform: translateX(0%);
    left: 0%;
  }
  20%,
  40% {
    transform: translateX(-40%);
    left: 40%;
  }
  40%,
  60% {
    transform: translateX(-60%);
    left: 60%;
  }
  60%,
  80% {
    transform: translateX(-80%);
    left: 80%;
  }
  80%,
  100% {
    transform: translateX(-100%);
    left: 100%;
  }
}

.fader {
  position: absolute;
  top: 0;
  height: 100%;
  width: 25px;
}
.fader.fader-left {
  left: 0;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
}

.fader.fader-right {
  right: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
}
@media (max-width: 450px) {
  .center {
    width: 100%;
    padding: 20px;
  }
}

/*  */
.link_logout,
.create_chat {
  display: flex;
}
.chat_buttons {
  left: 20%;
  position: relative;
  margin-top: 20px;
}
.no_list {
  overflow: hidden;
}
.no_list:hover h2 {
  position: inherit;
  white-space: nowrap;
  animation: floatText 5s infinite alternate ease-in-out;
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
  overflow: hidden;
}

.left_chat,
.delete_chat,
.rename_chat {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: inherit;
  background-color: #323232;
  padding: 15px;
  border-radius: 1em;
  color: white;
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