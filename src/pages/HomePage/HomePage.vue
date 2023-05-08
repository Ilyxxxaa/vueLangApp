<template>
  <div class="container">
    <Header />
    <main class="main">
      <div class="main_content">
        <h1 class="title">
          Приложение для изучения английского языка №1 в Беларуси
        </h1>
        <p>
          Играй в интерактивные игры, учи слова и изучение английского никогда
          не станет тяжелым
        </p>
        <router-link to="/book" class="btn">Начать учиться</router-link>
      </div>
      <div class="main_image">
        <img src="@/assets/learning-book.png" alt="" />
      </div>
    </main>
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

<style lang="scss">
main {
  display: flex;
  justify-content: center;
}
.main_content {
  padding-top: 110px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 20px;
  h1 {
    font-size: 40px;
    line-height: 45px;
    font-weight: 900;
  }
  p {
    font-size: 18px;
    line-height: 24px;
  }
  .btn {
    align-self: flex-start;
    background-color: #ff00d6;
    border-radius: 10px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    border: none;
    color: #fff;
    padding: 20px 30px;
    cursor: pointer;
    transition: all 0.3s;
  }
}

.main_image {
  align-self: flex-end;
  img {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
