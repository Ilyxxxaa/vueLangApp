import { createRouter, createWebHistory } from "vue-router";
import { HomePage, BookPage } from "../pages";

const routes = [
  { path: "/", component: HomePage },
  { path: "/book", component: BookPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
