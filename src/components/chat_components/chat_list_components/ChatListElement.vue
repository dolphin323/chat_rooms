<template>
  <div class="chat_list_element">
    <div class="info" @click="$emit('join-chat', chat_id)">
      <img src="https://static.toiimg.com/photo/72975551.cms" alt="chat img" />
      <span>{{ chat_name }}</span>
    </div>
    <img src="@/images/star.png" alt="send Icon" v-if="user_id === owner_id" />
  </div>
</template>

<script>
//import { USER_INFO } from "@/graphql/graphql";
export default {
  name: "ChatListElement",
  props: ["chat_name", "chat_id", "owner_id", "user_id"],
  data() {
    return {
      active: false,
      me: {},
    };
  },
  // async created() {
  //   const me = await this.$apollo.query({
  //     query: USER_INFO,
  //   });
  //   this.me123 = me.data.me;
  // },
};
</script>

<style scoped>
.chat_list_element {
  width: inherit;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 5px;
}
.chat_list_element:hover,
.info.true {
  background-color: rgb(242, 225, 245);
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
}

.chat_list_element .info {
  display: inline-flex;
}
</style>
