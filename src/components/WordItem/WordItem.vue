<template>
  <div class="">
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
  },
});
</script>

<style scoped></style>
