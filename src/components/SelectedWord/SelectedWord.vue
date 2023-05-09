<template>
  <div class="word">
    <img :src="getImgageURL()" alt="" />
    <div class="word_info">
      <h4 class="word_title">{{ word.word }}</h4>
      <h4 class="word_translate">{{ word.wordTranslate }}</h4>
      <p class="word_transcription">{{ word.transcription }}</p>
      <div class="word_buttons-container">
        <button class="word_audio-btn" @click="playAudio">
          <img src="@/assets/audio-icon.svg" alt="" />
        </button>
      </div>
      <p class="word_meaning" v-html="word.textMeaning"></p>
      <p class="word_meaning-translate">{{ word.textMeaningTranslate }}</p>
      <p class="word_example" v-html="word.textExample"></p>
      <p class="word_example-translate">{{ word.textExampleTranslate }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { BASE_URL } from "@/api";
import { IWord } from "@/pages/BookPage/types";
import { defineComponent, PropType } from "vue";
import { ISelectedItemData } from "./types";

export default defineComponent({
  name: "SelectedWord",
  props: {
    word: {
      required: true,
      type: Object as PropType<IWord>,
    },
  },
  data(): ISelectedItemData {
    return {
      audio: new Audio(),
    };
  },
  methods: {
    getImgageURL() {
      return `${BASE_URL}/${this.word.image}`;
    },
    playAudio() {
      this.audio.volume = 0.1;
      this.audio.play();
    },
    createNewAudio() {
      this.audio.src = `${BASE_URL}/${this.word.audio}`;
    },
  },
  created() {
    this.createNewAudio();
  },
  watch: {
    word() {
      this.createNewAudio();
    },
  },
});
</script>

<style lang="scss" scoped>
.word {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  color: "#2c2647";
  border-radius: 10px;
  overflow: hidden;
  &_info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &_title {
    font-size: 20px;
    text-transform: capitalize;
    background-color: rgba(44, 38, 71, 0.1254901961);
    border-radius: 5px;
  }
  &_translate {
    font-size: 20px;
  }
  &_meaning {
    background-color: rgba(44, 38, 71, 0.1254901961);
    border-radius: 5px;
  }
  &_example {
    background-color: rgba(44, 38, 71, 0.1254901961);
    border-radius: 5px;
  }
  &_audio-btn {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
}
</style>
