<template>
  <div class="container">
    <Header />
    <div class="levels">
      <h1 class="levels_title">
        {{ game }}
      </h1>
      <div class="levels_items">
        <div
          class="levels_item"
          @click="selectLevel(idx)"
          v-for="(item, idx) in levelsData"
          :key="item.level"
          :class="{ 'levels_item-active': idx === selectedLevel }"
        >
          {{ item.level }}
        </div>
      </div>
      <div class="levels_buttons">
        <button class="levels_btn levels_btn-back">Назад</button>
        <button
          class="levels_btn levels_btn-start"
          :disabled="selectedLevel === null"
        >
          Начать
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Header } from "@/components";
import { levelsData } from "@/data/levelsData";
import { IGameLevelData } from "./types";

export default defineComponent({
  name: "GameLevelPage",
  components: { Header },
  data(): IGameLevelData {
    return {
      game: "",
      levelsData,
      selectedLevel: null,
    };
  },
  methods: {
    selectLevel(level: number) {
      this.selectedLevel = level;
    },
  },
  created() {
    const currentGame = this.$route.params.game as string;
    if (currentGame === "Аудиовызов") {
      this.game = currentGame;
    } else {
      this.$router.push("/games");
    }
  },
});
</script>

<style lang="scss" scoped>
.levels {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  align-items: center;
  &_title {
    color: white;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 200px;
  }
  &_items {
    display: flex;
    gap: 20px;
    margin-bottom: 100px;
  }
  &_item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 700;
    width: 65px;
    height: 65px;
    border: 3px solid #fff;
    border-radius: 50%;
    transition: all 0.1s;
    cursor: pointer;
    &:hover {
      border: 3px solid #f801cf;
      background-color: #f801cf;
    }
    &-active {
      border: 3px solid #f801cf;
      background-color: #f801cf;
    }
  }
  &_buttons {
    display: flex;
    gap: 40px;
  }
  &_btn {
    width: 170px;
    height: 50px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    &:active {
      transform: scale(0.95);
    }
    &-back {
      background: #b60fd3;
      &:hover {
        background: #fff;
        color: #d01eb3;
      }
      &:active {
        transform: scale(0.95);
      }
    }
    &-start {
      background: #f801cf;
      &:disabled {
        opacity: 0.7;
        cursor: initial;
      }
    }
  }
}
</style>
