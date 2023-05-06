<template>
  <header class="header">
    <div class="logo">
      LangApp
      <div class="logo_subtitle">Учить английский - легко</div>
      <div class="div"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style lang="scss">
.header {
  display: flex;
}
.div {
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  background-color: red;
  border: 5px solid black;
}
</style>
