<template>
  <div class="post" v-for="post in posts">
    <div><strong>Name: </strong>{{ post.title }}</div>
    <div><strong>Description: </strong>{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 1px solid rgb(71, 172, 70);
  margin-top: 10px;
}
</style>
