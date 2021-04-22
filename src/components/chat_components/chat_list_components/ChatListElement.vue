<template>
  <div class="chat_list_element" @click="$emit('join-chat', chat_id)">
    <div class="info">
      <div class="chat_photo" :style="'background-color: ' + color">
        {{ chat_name[0] }}
      </div>
      <span>{{ chat_name }}</span>
    </div>
    <div>
      <img
        src="@/images/star.png"
        alt="send Icon"
        v-if="user_id === owner_id"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatListElement",
  props: ["chat_name", "chat_id", "owner_id", "user_id"],
  data() {
    return {
      active: false,
      color: "",
    };
  },
  created() {
    /*Random colors
    // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // this.color = "#" + randomColor;
    */
    //Random light colors
    this.color =
      "hsl(" +
      360 * Math.random() +
      "," +
      (25 + 70 * Math.random()) +
      "%," +
      (85 + 10 * Math.random()) +
      "%)";
  },
};
</script>

<style scoped>
.chat_photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  border: 1px solid;
}
.chat_list_element {
  width: inherit;
  overflow: hidden;
  padding: 3px;
  display: flex;
  justify-content: space-between;
}
.chat_list_element:hover,
.info.true {
  border: 1px solid;
  border-radius: 2em;
}
.chat_list_element img {
  width: 40px;
  height: 40px;
  border-radius: 2em;
}
.chat_list_element .info span {
  padding-left: 10px;
  font-size: x-large;
  padding-top: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 150px;
}

.chat_list_element .info {
  display: flex;
  justify-content: space-between;
}
</style>
