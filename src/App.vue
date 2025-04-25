<template>
  <div class="app">
    <h1>Make post</h1>
    <div class="app__btns">
      <my-button @click="showDialog">Create post</my-button>
      <my-select v-model="selectedSord" :options="sortedOptions"></my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="posts" @remove="removePost" v-if="!isPostLoading" />
    <div v-else>Loading..</div>
  </div>
</template>

<script>
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
import axios from "axios";

export default {
  components: {
    PostList,
    PostForm,
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSord: "",
      sortedOptions: [
        { value: "title", name: "By name" },
        { value: "body", name: "By context" },
      ],
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

    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
        this.isPostLoading = false;
      } catch (error) {
        alert("Error");
        this.isPostLoading = false;
      }
    },
  },

  mounted() {
    this.fetchPosts();
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

.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
</style>
