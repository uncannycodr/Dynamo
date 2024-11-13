<template>
  <div class="header">
    <div class="header__logo">
      <NuxtImg src="/images/logo.png" alt="hero" class="header__img" />
    </div>
    <DynaButton
      as="button"
      class="header__hamburger md:hidden"
      @click="toggleMenu"
    >
      <component :is="isMenuOpen ? IconX : IconAlignLeft" class="h-6 w-6" />
      <!-- Hamburger and Close Icon from Tabler Icons -->
    </DynaButton>
    <div :class="['header__nav', isMenuOpen ? 'block' : 'hidden', 'lg:flex']">
      <DynaMenu
        variant="header"
        class="cursor-pointer flex flex-col lg:flex-row lg:pb-0"
      >
        <DynaText
          v-for="(item, index) in headerLinks"
          :key="index"
          tag="li"
          color="black"
          size="base"
          weight="medium"
        >
          <NuxtLink :to="item.link">{{ item.text }}</NuxtLink>
        </DynaText>
      </DynaMenu>
      <div
        class="header__button flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 items-center mt-4 lg:mt-0"
      >
        <DynaText
          tag="p"
          color="black"
          size="base"
          weight="medium"
          class="cursor-pointer hover:text-chromo-green-1000"
        >
          Login
        </DynaText>

        <DynaButton as="button" :leftIcon="IconRosette" variant="header"
          >Sign up for free</DynaButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconAlignLeft, IconRosette, IconX } from "@tabler/icons-vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const headerLinks = [
  { text: "For companies", link: "/" },
  { text: "For talent", link: "about" },
];
</script>

<style scoped>
.header {
  @apply max-w-[1216px] mx-auto flex flex-row justify-between items-center lg:py-[4px] py-8  px-6;
}

.header__nav {
  @apply lg:flex lg:flex-row flex-col lg:gap-x-20  items-center;
  @apply absolute top-[72px] left-0 right-0 bg-white  lg:p-4 p-20 shadow-lg lg:static lg:shadow-none; /* Mobile dropdown styles */
}

.header__img {
  @apply lg:max-w-[186.58px] max-w-[162.09px];
}

.header__button {
  @apply flex flex-row gap-x-4  items-center;
}
.header__hamburger {
  @apply lg:hidden; /* Only show on mobile screens */
}
.router-link-exact-active {
  @apply font-semibold;
}
</style>
