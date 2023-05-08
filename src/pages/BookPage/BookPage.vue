<template>
  <div class="container">
    <Header />
    <div class="book_content">
      <h2 class="title">Учебник</h2>
      <div class="levels">
        <button
          v-for="(item, index) in levelsData"
          :key="item.level"
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
              'background-color': index === activeLevel ? activeColor : 'white',
            }"
          />
        </button>
      </div>
      <div class="words">
        <h2 class="title">Слова</h2>
        <div v-if="!wordsLoading" class="words_content">
          <div class="words_container">
            <WordItem
              v-for="(word, i) in words"
              :key="word.id"
              :item="word"
              :index="i"
              :active-index="activeWord"
              :active-color="activeColor"
              :set-active-word="setActiveWord"
            />
          </div>
          <div class="selected-word">
            <SelectedWord v-if="words?.length" :word="words[activeWord]" />
          </div>
        </div>
        <div v-else class="">
          <Loader />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Header, WordItem, SelectedWord, Loader } from "@/components";
import { levelsData } from "@/data/levelsData";
import { getWordsRequest } from "@/api";
import { IBookPageData } from "./types";
import { levelsColors } from "@/data/levelsData";

export default defineComponent({
  name: "BookPage",
  components: { Header, WordItem, SelectedWord, Loader },
  data(): IBookPageData {
    return {
      levelsData,
      activeLevel: 0,
      words: [],
      activeWord: 0,
      page: 0,
      wordsLoading: true,
    };
  },
  methods: {
    changeLevel(level: number) {
      this.activeLevel = level;
    },
    async getWords() {
      this.wordsLoading = true;
      const words = await getWordsRequest(this.activeLevel, this.page);
      this.words = words;
      // this.wordsLoading = false;
    },
    setActiveWord(wordIndex: number) {
      this.activeWord = wordIndex;
    },
  },
  created() {
    this.getWords();
  },
  computed: {
    activeColor(): string {
      return levelsColors[this.activeLevel];
    },
  },
  watch: {
    activeLevel() {
      this.getWords();
    },
  },
});
</script>

<style lang="scss" scoped>
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
    padding-bottom: 10px;
    height: 100%;
    &_container {
      width: 60%;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  }

  .words_content {
    display: flex;
    justify-content: space-between;

    .selected-word {
      width: 35%;
    }
  }
}
</style>
