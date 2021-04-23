<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            Create chat
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div class="error" v-if="error">Empty string</div>
            <div class="error" v-if="error_name">
              Chat with such name is
              <p>already exists</p>
            </div>
            <input class="chat_name_input" type="text" v-model="chat_name"
          /></slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              @click="CreateChat"
              aria-label="Create chat"
            >
              Create chat
            </button>
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Close
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
import { CREATE_ROOM } from "@/graphql/graphql.js";
export default {
  name: "ModalCreateChat",
  data() {
    return {
      error: false,
      chat_name: "",
      error_name: false,
      rooms: [],
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async CreateChat() {
      if (this.chat_name) {
        this.error_name = false;
        this.error = false;
        try {
          await this.$apollo.mutate({
            mutation: CREATE_ROOM,
            variables: {
              room_name: this.chat_name,
            },
          });
          this.chat_name = "";
          this.close();
        } catch (err) {
          this.error_name = true;
        }
      } else {
        this.error = true;
        this.error_name = false;
      }
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #615061;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #615061;
  background: transparent;
}

.btn-green {
  color: white;
  background: #615061;
  border: 1px solid #615061;
  padding: 10px;
  border-radius: 1em;
  margin: 3px;
}
.chat_name_input {
  width: 90%;
  padding: 6px;
  border-color: rgb(216, 216, 216);
  border-radius: 0.1rem;
}
.chat_name_input:hover {
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}
.chat_name_input:active,
.chat_name_input:focus {
  box-shadow: 0 0 15px 4px rgb(218, 215, 221);
  border-color: white;
}
</style>