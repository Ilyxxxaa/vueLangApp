<template>
  <div class="container">
    <Header />
    <section class="games">
      <h1 class="games_title">Игры</h1>
      <div class="games_items">
        <div class="item">
          <div class="item_top">
            <h4 class="item_title">Аудиовызов</h4>
            <img class="item_img" src="@/assets/stiker1.png" alt="" />
          </div>
          <div class="item_text">
            Улучшает восприятие речи на слух. Используй мышь, чтобы выбрать.
            Используй цифровые клавиши от 1 до 5 для выбора ответа. Используй
            пробел для повтроного звучания слова. Используй клавишу Enter для
            перехода к следующему слову
          </div>
          <button class="item_btn" @click="goToAudioCallGameLevel">
            Играть
          </button>
        </div>
        <div class="item">
          <div class="item_top">
            <h4 class="item_title">Спринт</h4>
            <img class="item_img" src="@/assets/stiker2.png" alt="" />
          </div>
          <div class="item_text">
            Тренировка Спринт поможет тебе проверить знаешь ли ты правильный
            перевод.Игра длится 20 секунд или пока не закончатся слова. Чтобы
            дать ответ, кликай по нему мышкой или нажимай клавиши-стрелки.
            Получай баллы за 3 верных ответа подряд
          </div>
          <button class="item_btn">Играть</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GamesEnum } from "@/types";
import { Header } from "@/components";

export default defineComponent({
  name: "GamesPage",
  components: { Header },
  methods: {
    goToAudioCallGameLevel() {
      this.$router.push({
        name: "gameLevel",
        params: {
          game: GamesEnum.AUDIO_CALL,
        },
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.games {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  &_title {
    color: white;
    font-size: 32px;
    font-weight: 900;
  }
  &_items {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    align-items: center;
  }
  .item {
    width: 500px;
    height: 350px;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    position: relative;
    &_top {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    &_img {
      position: absolute;
      width: 80px;
      height: 80px;
      right: 30px;
    }
    &_title {
      color: #9339b3;
      font-weight: 900;
      font-size: 28px;
    }
    &_text {
      font-size: 18px;
      text-align: center;
    }
    &_btn {
      width: 170px;
      height: 50px;
      margin-bottom: 20px;
      border: none;
      border-radius: 5px;
      font-size: 22px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      background: #d84fba;
      a {
        color: #fff;
      }
      &:hover {
        background: #ea5acb;
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }
}
</style>
