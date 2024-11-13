<template>
  <div class="job-card">
    <div class="job-card__photo">
      <NuxtImg :src="imageSrc" alt="hero" class="job-card__img" />
    </div>
    <DynaText
      tag="p"
      color="academic-blue-1000"
      size="2xl"
      weight="semibold"
      class="leading-[30px]"
    >
      {{ title }}
    </DynaText>
    <ul class="list-disc pl-8">
      <DynaText
        tag="li"
        color="academic-blue-1000"
        size="lg"
        weight="medium"
        class="leading-[24.3px]"
      >
        {{ desc1 }}
      </DynaText>
      <DynaText
        tag="li"
        color="academic-blue-1000"
        size="lg"
        weight="medium"
        class="leading-[24.3px]"
      >
        {{ desc2 }}
      </DynaText>
      <DynaText
        tag="li"
        color="academic-blue-1000"
        size="lg"
        weight="medium"
        class="leading-[24.3px]"
      >
        {{ desc3 }}
      </DynaText>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageSrc: string;
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
}
const props = defineProps<Props>();
</script>

<style scoped>
.job-card {
  @apply w-full flex flex-col gap-y-4 p-9 border border-chromo-green-300 rounded-3xl;
}

.job-card__photo {
  @apply w-full flex justify-center items-center; /* Adjust as necessary */
}
</style>
