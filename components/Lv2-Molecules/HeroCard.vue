<template>
  <div :class="['hero-card', color]">
    <DynaText
      tag="h1"
      size="4xl"
      weight="semibold"
      class="leading-[40px] text-center"
      :class="textColor"
    >
      {{ number }}
    </DynaText>
    <DynaText
      tag="p"
      fluid="xs"
      weight="normal"
      class="leading-[18px] text-center"
      :class="textColor"
    >
      {{ text }}
    </DynaText>
  </div>
</template>

<script setup lang="ts">
interface Props {
  number: string;
  text: string;
  color: string;
  textColor: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
.hero-card {
  @apply min-[1030px]:max-w-[117px]    flex flex-col min-[1030px]:gap-y-2 px-10  py-[22px] min-[1030px]:px-[14px] rounded-3xl items-center;
}
</style>
