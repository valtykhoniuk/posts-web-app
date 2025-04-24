<template>
  <form @submit.prevent>
    <h4>Creating post</h4>
    <input v-model="post.title" class="input" type="text" placeholder="Name" />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Description"
    />
    <button class="btn" @click="createPost">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  color: white;
  background: rgb(71, 172, 70);
  border: none;
  border-radius: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid rgb(71, 172, 70);
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
