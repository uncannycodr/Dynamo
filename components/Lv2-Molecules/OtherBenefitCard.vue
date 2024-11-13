<template>
  <div class="other-card">
    <div class="other-card__photo">
      <NuxtImg :src="imageSrc" alt="hero" class="other__img" />
    </div>
    <DynaText
      tag="p"
      color="academic-blue-1000"
      size="1.375rem"
      weight="bold"
      class="leading-[22px]"
    >
      {{ title }}
    </DynaText>
    <DynaText
      tag="p"
      color="academic-blue-1000"
      size="lg"
      weight="normal"
      class="leading-[27px]"
    >
      {{ description }}
    </DynaText>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageSrc: string;
  title: string;
  description: string;
}
const props = defineProps<Props>();
</script>

<style scoped>
.other-card {
  @apply w-full  flex flex-col gap-y-4 p-9 border-2 border-chromo-green-300 rounded-3xl;
}
</style>
