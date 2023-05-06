<template>
  <div class="background">
    <SideMenu />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SideMenu } from "@/components";

export default defineComponent({
  name: "App",
  components: { SideMenu },
});
</script>

<style lang="scss">
@import "./reset.css";
#app {
  font-family: "Montserrat", sans-serif;
  .background {
    background-image: url("@/assets/content-bg.png");
    min-height: 100vh;
  }
  .container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }
}
</style>
