<template>
  <header class="header">
    <div class="logo">
      LangApp
      <div class="logo_subtitle">Учить английский - легко</div>
    </div>
    <div class="auth_buttons">
      <button>Войти</button>
      <button>Регистрация</button>
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
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  text-align: center;
  font-weight: 700;
  font-size: 33px;
  color: white;
}
.logo_subtitle {
  font-size: 12px;
}
.auth_buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    margin: 0 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 15px;
    line-height: 18px;
    cursor: pointer;
    transition: all 0.2s;
    &:active {
      background-color: red;
    }
  }
}
</style>
