<template>
  <div class="container">
    <Header />
  </div>
</template>

<script lang="ts">
import { Header } from "@/components";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: { Header },
});
</script>

<style scoped></style>
