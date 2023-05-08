<template>
  <div class="container">
    <Header />
    <div class="book_content">
      <h2 class="title">Учебник</h2>
      <div class="levels">
        <button
          v-for="(item, index) in levelsData"
          :key="item.color"
          class="levels-btn"
          :style="{
            'background-color':
              index === activeLevel ? 'white' : 'rgba(255, 255, 255, 0.5)',
          }"
          @click="changeLevel(index)"
        >
          <div class="btn-left">{{ item.title }}</div>
          <div class="btn-right">{{ item.level }}</div>
          <span
            class="btn-circle"
            :style="{
              'background-color': index === activeLevel ? item.color : 'white',
            }"
          />
        </button>
      </div>
      <div class="words">
        <h2 class="title">Слова</h2>
        <div class="words_container">
          <WordItem v-for="word in words" :key="word.id" :item="word" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Header, WordItem } from "@/components";
import { levelsData } from "@/data/levelsData";
import { getWordsRequest } from "@/api";
import { IBookPageData } from "./types";

export default defineComponent({
  name: "BookPage",
  components: { Header, WordItem },
  data(): IBookPageData {
    return {
      levelsData,
      activeLevel: 0,
      words: [],
    };
  },
  methods: {
    changeLevel(level: number) {
      this.activeLevel = level;
    },
    async getWords() {
      const words = await getWordsRequest(1, 1);
      this.words = words;
    },
  },
  created() {
    this.getWords();
  },
});
</script>

<style lang="scss">
.book_content {
  display: flex;
  flex-direction: column;
  gap: 30px;

  .title {
    color: white;
    font-size: 32px;
    font-weight: 900;
    align-self: center;
    margin-bottom: 30px;
  }
  .levels {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    &-btn {
      width: 170px;
      height: 50px;
      border-radius: 0.5rem;
      color: #2c2647;
      font-size: 20px;
      font-weight: 900;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
      position: relative;
      align-items: center;
      cursor: pointer;
      overflow: hidden;
      border: none;
      padding: 10px;
    }
    .btn-right {
      z-index: 2;
    }

    .btn-circle {
      position: absolute;
      border-radius: 50%;
      height: 110px;
      width: 110px;
      top: 0;
      right: -55px;
    }
  }

  .words {
    display: flex;
    flex-direction: column;
  }
}
</style>
