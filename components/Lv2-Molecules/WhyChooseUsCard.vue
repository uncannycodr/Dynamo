<template>
  <div class="choose-us-card">
    <div class="choose-us-card__image">
      <NuxtImg :src="imageSrc" alt="hero" class="choose-us-card__img" />
    </div>
    <DynaText
      tag="h3"
      color="academic-blue-800"
      size="4xl"
      weight="semibold"
      class="leading-9 tracking-wide font"
    >
      {{ title }}
    </DynaText>
    <DynaText
      tag="p"
      color="academic-blue-500"
      size="base"
      weight="medium"
      class="leading-[17.9px] tracking-widest font"
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
.choose-us-card {
  @apply flex flex-col w-full py-9  border-2 border-academic-blue-200 rounded-xl items-center gap-2;
}

/* .choose-us-card__image {
  @apply text-center;
}

.choose-us-card__img {
  @apply w-14  h-14 ml-0 mr-6;
} */
.font {
  font-family: "Zilla Slab", serif;
}
</style>
