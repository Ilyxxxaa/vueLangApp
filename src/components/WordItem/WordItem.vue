<template>
  <div class="word" :style="getColor" @click="setActiveWord(index)">
    <div class="word-text">{{ item.word }}</div>
    <div class="word-translate">{{ item.wordTranslate }}</div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { IWord } from "@/pages/BookPage/types";

export default defineComponent({
  name: "WordItem",
  props: {
    item: {
      required: true,
      type: Object as PropType<IWord>,
    },
    index: {
      required: true,
      type: Number,
    },
    activeIndex: {
      required: true,
      type: Number,
    },
    activeColor: {
      required: true,
      type: String,
    },
    setActiveWord: {
      required: true,
      type: Function as PropType<(wordIndex: number) => void>,
    },
  },
  computed: {
    getColor() {
      if (this.index === this.activeIndex) {
        return { "background-color": this.activeColor };
      } else {
        return { "background-color": "white" };
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.word {
  position: relative;
  width: 178px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem rem;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  &-text {
    font-weight: 900;
  }
  &-translate {
    text-align: center;
  }
}
</style>
