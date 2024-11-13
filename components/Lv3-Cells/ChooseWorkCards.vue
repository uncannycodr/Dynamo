<template>
  <div class="work-cards">
    <ChooseWorkCard
      v-for="(card, index) in workCard"
      :key="index"
      :imageSrc="card.imageSrc"
      :description="card.description"
      :title="card.title"
    />
  </div>
</template>

<script setup lang="ts">
const workCard = [
  {
    imageSrc: "/images/medal.png",
    title: "Competitive edge",
    description:
      "Impress employers by being vetted for your communication and domain expertise.",
  },
  {
    imageSrc: "/images/medal.png",
    title: "Competitive edge",
    description:
      "Impress employers by being vetted for your communication and domain expertise.",
  },
  {
    imageSrc: "/images/medal.png",
    title: "Competitive edge",
    description:
      "Impress employers by being vetted for your communication and domain expertise.",
  },
];
</script>

<style scoped>
.work-cards {
  @apply grid grid-cols-1  gap-4;
}
</style>
