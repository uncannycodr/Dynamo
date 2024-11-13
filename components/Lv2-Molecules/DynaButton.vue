<template>
  <component :is="as" :class="btnClasses">
    <component :is="leftIcon" class="w-4 h-4 text-white font-bold" />
    <span>
      <slot />
    </span>
    <component :is="rightIcon" class="w-5 h-5 ml-2" />
  </component>
</template>

<script setup lang="ts">
interface Props {
  leftIcon?: object;
  rightIcon?: object;
  as: string | object;
  variant?: "primary" | "secondary" | "outline" | "header";
}

const props = defineProps<Props>();

const btnClasses = computed(() => [
  "btn",
  props.variant ? `btn--${props.variant}` : "", // Modifier for variant
]);
</script>

<style scoped>
.btn {
  @apply inline-flex items-center justify-center;
}
.btn--header {
  @apply text-sm font-semibold leading-5 py-[13.8px] px-[21px]  rounded-[12px] flex items-center justify-center gap-[6px] w-auto min-w-[161.18px] h-[40.85px] bg-chromo-green-600 text-white hover:bg-chromo-green-700;
}
.btn--primary {
  @apply text-[18px] font-semibold leading-[27px] py-[26px] px-[60px] rounded-[12px] flex items-center justify-center gap-[9px] w-auto min-w-[300px] h-[65px] bg-chromo-green-600 text-white hover:bg-chromo-green-700;
}
.btn--secondary {
  @apply text-[18px] font-semibold leading-[27px] py-[26px] px-[60px] rounded-[12px] flex items-center justify-center gap-[9px] w-auto min-w-[243px] h-[65px] bg-vibrant-orange-600 text-white hover:bg-vibrant-orange-700;
}
.btn--outline {
  @apply text-[18px] font-semibold leading-[27px] py-[26px] px-[60px] rounded-[12px] border-2 min-w-[243px] h-[65px] border-chromo-green-700 text-chromo-green-700 bg-transparent hover:border-none hover:bg-vibrant-orange-700 hover:text-white;
}
</style>
