<template>
  <div class="owner">
    <span class="owner_name">
      <img src="https://static.toiimg.com/photo/72975551.cms" alt="chat img" />
      <span class="text">{{ owner_name }}</span></span
    >
    <img src="@/images/star.png" alt="send Icon" />
  </div>
</template>

<script>
export default {
  name: "ChatOwner",
  props: ["owner_name"],
};
</script>
<style scoped>
.owner {
  display: flex;
  justify-content: space-between;
}
.owner_name {
  font-size: x-large;
  display: inline-flex;
}
.owner_name .text {
  padding-left: 10px;
  padding-top: 3px;
}
.owner .owner_name img {
  width: 40px;
  height: 40px;
  border-radius: 2em;
}
.owner img {
  width: 40px;
}
</style>