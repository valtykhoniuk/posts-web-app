<template>
  <div>
    <h1>Page with posts</h1>
    <my-input v-focus v-model="searchQuery" placeholder="Search..." />
    <div class="app__btns">
      <my-button>Create post</my-button>
      <my-select v-model="selectedSort" :options="sortedOptions"></my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>
    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostLoading" />
    <div v-else>Loading..</div>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    PostList,
    PostForm,
  },

  setup() {
    const { posts, totalPages, isPostLoading } = usePosts(10);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    const dialogVisible = ref(false);
    const sortedOptions = ref([
      { value: "title", name: "By name" },
      { value: "body", name: "By content" },
    ]);

    return {
      posts,
      totalPages,
      isPostLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
      dialogVisible,
      sortedOptions,
    };
  },
};
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}
</style>
