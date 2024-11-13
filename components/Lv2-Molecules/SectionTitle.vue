<!-- ContentBlock.vue -->
<template>
  <div class="section-title">
    <DynaText
      tag="p"
      color="academic-blue-400"
      size="sm"
      weight="medium"
      class="text-center"
    >
      {{ caption }}
    </DynaText>
    <DynaText
      tag="p"
      color="academic-blue-800"
      fluid="xl"
      weight="semibold"
      class="text-center leading-[50px]"
    >
      {{ heading }}
    </DynaText>
    <DynaText
      tag="p"
      color="academic-blue-600"
      size="lg"
      weight="medium"
      class="text-center"
    >
      {{ paragraph }}
    </DynaText>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageSrc?: string;
  caption: string;
  heading: string;
  paragraph: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
.section-title {
  @apply max-w-[580px] flex flex-col gap-y-6 md:my-4;
}
</style>
