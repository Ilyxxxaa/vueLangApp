<template>
  <div class="">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style lang="scss">
@import "./reset.css";
#app {
  font-family: "Montserrat", sans-serif;
  .container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }
}
</style>
