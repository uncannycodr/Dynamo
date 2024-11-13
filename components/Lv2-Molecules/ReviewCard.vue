<template>
  <div class="review-card">
    <div class="review-card__profile">
      <div class="review-card__photo">
        <NuxtImg :src="photoSrc" alt="hero" class="review-card__img" />
      </div>
      <div class="review-card__image">
        <NuxtImg :src="imageSrc" alt="hero" class="review-card__img" />
      </div>
    </div>
    <DynaText
      tag="p"
      color="chromo-green-100"
      size="base"
      weight="normal"
      class="leading-6"
    >
      {{ description }}
    </DynaText>
    <div class="review-card_about">
      <DynaText tag="h3" color="chromo-green-100" size="base" weight="semibold">
        {{ name }}
      </DynaText>
      <DynaText tag="p" color="academic-blue-400" size="sm" weight="normal">
        {{ position }}
      </DynaText>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  photoSrc?: string;
  imageSrc?: string;
  description?: string;
  name?: string;
  position?: string;
}
const props = defineProps<Props>();
</script>

<style scoped>
.review-card {
  @apply w-full flex flex-col  gap-9 bg-gradient-to-b from-chromo-green-900 to-chromo-green-1000 px-9 py-9 rounded-3xl;
}

.review-card__profile {
  @apply flex  min-[800px]:flex-row flex-col gap-y-3  min-[800px]:justify-between items-center;
}

.review-card_about {
  @apply flex flex-col gap-1;
}
</style>
