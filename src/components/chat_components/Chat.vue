<template>
  <div class="chat">
    <div class="messages">
      <div v-for="mess in messages" :key="mess.id">
        <ChatElement
          :mess="mess.text"
          :messTime="
            (() => {
              norm_date = new Date(mess.timestamp);
              return (
                norm_date.getHours() +
                ':' +
                norm_date.getMinutes() +
                ' ' +
                norm_date.getDate() +
                '/' +
                (norm_date.getMonth() + 1)
              );
            })()
          "
          :author="mess.author"
          :user_id="user_id"
        />
      </div>
    </div>
    <div class="wrap_input_mess">
      <div class="input_mess">
        <form class="send_mess" @submit.prevent="SendMessage">
          <input
            type="text"
            class="form_control"
            v-model="message_text"
            placeholder="Enter your message"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ChatElement from "./chat_components/ChatElement";
import {
  CREATE_MESSAGE,
  SUB_MESSAGE_CREATED,
  USER_INFO,
} from "@/graphql/graphql.js";

export default {
  name: "Chat",
  components: {
    ChatElement,
  },
  props: ["messages", "user_id"],
  data() {
    return {
      message_text: "",
      me: {},
    };
  },
  apollo: {
    me: {
      fetchPolicy: "no-cache",
      query: USER_INFO,
    },
    $subscribe: {
      create_rooms: {
        query: SUB_MESSAGE_CREATED,
        result({ data }) {
          this.messages.push(data.messageCreated);
        },
      },
    },
  },
  methods: {
    async SendMessage() {
      if (this.message_text) {
        await this.$apollo.mutate({
          mutation: CREATE_MESSAGE,
          variables: {
            message: this.message_text,
          },
        });
        this.message_text = "";
      }
    },
  },
};
</script>

<style scoped>
.chat {
  grid-area: chat;
  width: 100%;
}
.messages {
  overflow-y: auto;
  height: 90%;
}
.messages::-webkit-scrollbar {
  width: 10px;
}
.messages::-webkit-scrollbar-track {
  border: 7px solid #232943;
  box-shadow: inset 0 0 2.5px 2px rgba(0, 0, 0, 0);
}
.messages::-webkit-scrollbar-thumb {
  background: linear-gradient(#e66465, #9198e5);
  border-radius: 3px;
}
.send_btn {
  border-radius: 0.5em;
}
.send_btn img {
  width: 30px;
  height: 30px;
}
.send_mess {
  display: flex;
  width: inherit;
}
.input_mess {
  width: inherit;
}
input.form_control {
  border: 2px solid;
  width: inherit;
  padding: 15px;
  border-radius: 1em;
}
.wrap_input_mess {
  width: inherit;
}
</style>