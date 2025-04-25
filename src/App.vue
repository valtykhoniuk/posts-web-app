<template>
  <div class="app">
    <h1>Make post</h1>
    <my-button @click="showDialog" style="margin: 15px 0"
      >Create post</my-button
    >
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";

export default {
  components: {
    PostList,
    PostForm,
  },

  data() {
    return {
      posts: [
        { id: 1, title: "Javascript 1", body: "Description of post" },
        { id: 2, title: "Javascript 2", body: "Description of post 2" },
        { id: 3, title: "Javascript 3", body: "Description of post 3" },
        { id: 4, title: "Javascript 4", body: "Description of post 4" },
      ],
      dialogVisible: false,
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },

    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
