import About from "@/pages/About.vue";
import Main from "@/pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },

  {
    path: "/posts",
    component: PostPage,
  },

  {
    path: "/about",
    component: About,
  },

  {
    path: "/posts/:id",
    component: PostIdPage,
  },

  {
    path: "/store",
    component: PostPageWithStore,
  },

  {
    path: "/composition",
    component: PostPageCompositionApi,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
