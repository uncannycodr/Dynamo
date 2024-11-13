<template>
  <ul :class="menuClasses">
    <slot />
  </ul>
</template>

<script setup lang="ts">
interface Props {
  variant?: "header" | "footer"; // Different variants for header and footer
}

const props = defineProps<Props>();

const menuClasses = computed(() => [
  "menu",
  props.variant ? `menu--${props.variant}` : "", // Modifier for variant
]);
</script>

<style scoped>
.menu {
  @apply flex;
}

.menu--header {
  @apply flex-col lg:flex-row gap-6;
}

.menu--footer {
  @apply flex-col gap-2;
}
.router-link-exact-active {
  @apply font-semibold;
}
</style>
