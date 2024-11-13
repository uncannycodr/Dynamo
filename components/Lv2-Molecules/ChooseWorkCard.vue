<template>
  <div class="work-card">
    <div class="work-card__photo">
      <NuxtImg :src="imageSrc" alt="hero" class="work-card__img" />
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
.work-card {
  @apply w-full bg-white  flex flex-col gap-y-4 p-9 border border-chromo-green-300 rounded-3xl;
}
</style>
