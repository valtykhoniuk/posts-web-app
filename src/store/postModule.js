import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
    isPostLoading: false,
    selectedSort: "",
    searchQuery: "",
    pageNumber: 1,
    limit: 10,
    totalPages: 0,
    sortedOptions: [
      { value: "title", name: "By name" },
      { value: "body", name: "By context" },
    ],
  }),

  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(
          post2[state.selectedSort]
        );
      });
    },

    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },

    setLoading(state, bool) {
      state.isPostLoading = bool;
    },

    setPage(state, page) {
      state.pageNumber = page;
    },

    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },

    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },

    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.pageNumber,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", response.data);
      } catch (error) {
        alert("Error");
        console.log(error);
      } finally {
        commit("setLoading", false);
      }
    },

    async loadMorePosts({ state, commit }) {
      try {
        commit("setPage", state.pageNumber + 1);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.pageNumber,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", [...state.posts, ...response.data]);
      } catch (error) {
        alert("Error");
        console.log(error);
      } finally {
        commit("setLoading", false);
      }
    },
  },

  namespaced: true,
};
