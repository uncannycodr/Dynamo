<template>
  <div class="benefit-card">
    <div class="benefit-card__image">
      <NuxtImg :src="imageSrc" alt="hero" class="client-logos__img" />
    </div>
    <DynaText
      tag="h3"
      color="academic-blue-800"
      size="2xl"
      weight="semibold"
      class="leading-8"
    >
      {{ title }}
    </DynaText>
    <DynaText
      tag="p"
      color="academic-blue-500"
      size="lg"
      weight="medium"
      class="leading-6"
    >
      {{ description }}
    </DynaText>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageSrc?: string;
  title?: string;
  description?: string;
}
const props = defineProps<Props>();
</script>

<style scoped>
.benefit-card {
  @apply flex flex-col gap-y-4 w-full py-12 px-9;
}
</style>
