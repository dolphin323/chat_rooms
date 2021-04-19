<template>
  <div class="chat">
    <div class="messages">
      <div v-for="mess in messages" :key="mess.id">
        <ChatElement
          :mess="mess.text"
          :messTime="mess.timestamp"
          :author="mess.author"
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
import { CREATE_MESSAGE } from "@/graphql/graphql.js";

export default {
  name: "Chat",
  components: {
    ChatElement,
  },
  props: ["messages"],
  data() {
    return {
      message_text: "",
    };
  },
  methods: {
    async SendMessage() {
      if (this.message_text) {
        const data = await this.$apollo.mutate({
          mutation: CREATE_MESSAGE,
          variables: {
            message: this.message_text,
          },
        });
        console.log(data);
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