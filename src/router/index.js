import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import shop from "../views/shop.vue";
import product from "../views/product.vue";
import blog from "../views/blog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "shop",
    component: shop,
  },
  {
    path: "/product",
    name: "product",
    component: product,
  },
  {
    path: "/blog",
    name: "blog",
    component: blog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
