<template>
  <transition name="menu">
    <div class="menu" :class="{ openMenu: menuIsOpen }">
      <button class="menu-btn" @click="toggleMenu">
        <img v-if="!menuIsOpen" src="@/assets/menu-icon.svg" alt="image" />
        <img v-else src="@/assets/cross-icon.svg" alt="image" />
        <div class="">Меню</div>
      </button>
      <button class="menu-btn">
        <img src="@/assets/home-icon.svg" alt="" />
        <div class="">Главная</div>
      </button>
      <button class="menu-btn">
        <img src="@/assets/book-icon.svg" alt="" />
        <div class="">Учебник</div>
      </button>
      <button class="menu-btn">
        <img src="@/assets/game-icon.svg" alt="" />
        <div class="">Игры</div>
      </button>
      <button class="menu-btn">
        <img src="@/assets/stats-icon.svg" alt="" />
        <div class="">Статистика</div>
      </button>
      <button class="menu-btn log-out">
        <img src="@/assets/logout-icon.svg" alt="" />
      </button>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideMenu",
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
});
</script>

<style lang="scss">
.menu {
  position: relative;
  background-color: white;
  width: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  gap: 30px;
  overflow-x: hidden;
  transition: width 300ms ease-in-out;

  &-btn {
    cursor: pointer;
    background-color: inherit;
    border: none;
    width: 100%;
    display: grid;
    grid-template-columns: 100px 150px;
    align-items: center;
    border-left: 5px solid #b03fd8;
    padding-left: 25px;
    img {
      width: 50px;
      height: 50px;
    }
    div {
      width: 100%;
      display: inline-block;
      text-align: center;
      color: #b03fd8;
      font-size: 20px;
    }
  }
  .log-out {
    position: absolute;
    bottom: 20px;
  }
}

.openMenu {
  width: 300px;
}
</style>
