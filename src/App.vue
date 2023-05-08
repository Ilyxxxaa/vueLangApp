<template>
  <SideMenu />
  <div class="content">
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
  min-height: 100vh;
  display: flex;
  position: relative;

  .container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .content {
    width: 100%;
    background-image: url("@/assets/content-bg.png");
    padding-left: 100px;
  }
}
</style>
