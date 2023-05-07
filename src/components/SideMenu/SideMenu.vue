<template>
  <div class="menu-wrapper">
    <div class="menu" :class="{ openMenu: menuIsOpen }">
      <button class="menu-btn" @click="toggleMenu">
        <img v-if="!menuIsOpen" src="@/assets/menu-icon.svg" alt="image" />
        <img v-else src="@/assets/cross-icon.svg" alt="image" />
        <div class="">Меню</div>
      </button>
      <router-link to="/" class="menu-btn">
        <img src="@/assets/home-icon.svg" alt="" />
        <div class="">Главная</div>
      </router-link>
      <router-link to="/book" class="menu-btn">
        <img src="@/assets/book-icon.svg" alt="" />
        <div class="">Учебник</div>
      </router-link>
      <router-link to="/games" class="menu-btn">
        <img src="@/assets/game-icon.svg" alt="" />
        <div class="">Игры</div>
      </router-link>
      <router-link to="/statistics" class="menu-btn">
        <img src="@/assets/stats-icon.svg" alt="" />
        <div class="">Статистика</div>
      </router-link>
      <button class="menu-btn log-out">
        <img src="@/assets/logout-icon.svg" alt="" />
      </button>
    </div>
  </div>
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
.menu-wrapper {
  position: absolute;
  height: 100%;
}
.menu {
  top: 0;
  position: sticky;
  background-color: white;
  min-width: 100px;
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
    border-left: 5px solid transparent;
    padding-left: 20px;
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

.router-link-active {
  border-left: 5px solid #b03fd8;
}

.openMenu {
  width: 300px;
}
</style>
