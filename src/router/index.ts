import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import showBlogs from '../components/showBlogs.vue';
import addBlog from '../components/addBlog.vue';
import singleBlog from '../components/singleBlog.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Show Blog",
    component: showBlogs,
  },
  {
    path: "/add",
    name: "Add Blog",
    component: addBlog
  },
  {
    path: "/blog/:id",
    name: "Add Blog",
    component: singleBlog
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
