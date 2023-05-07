import { createRouter, createWebHistory } from "vue-router";
import { HomePage, BookPage, GamesPage, StatsPage } from "../pages";

const routes = [
  { path: "/", component: HomePage },
  { path: "/book", component: BookPage },
  { path: "/games", component: GamesPage },
  { path: "/statistics", component: StatsPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
