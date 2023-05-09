import { createRouter, createWebHistory } from "vue-router";
import {
  HomePage,
  BookPage,
  GamesPage,
  StatsPage,
  AudioCall,
  GameLevelPage,
} from "../pages";

const routes = [
  { path: "/", component: HomePage },
  { path: "/book", component: BookPage },
  { path: "/games", component: GamesPage },
  { path: "/statistics", component: StatsPage },
  { path: "/games/audiocall", component: AudioCall },
  {
    path: "/games/gameLevel/:game",
    component: GameLevelPage,
    name: "gameLevel",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
