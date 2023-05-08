<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loader",
});
</script>

<style lang="scss" scoped>
.loading {
  top: 0;
  left: 0;
  z-index: 101;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 80px;
    height: 80px;
    border: 5px solid rgba(0, 0, 0, 0.2);
    border-top-color: #b03fd8;
    border-radius: 50%;
    animation: spin linear 1000ms infinite;
  }
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
