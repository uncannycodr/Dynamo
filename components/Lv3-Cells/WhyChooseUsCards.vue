<template>
  <div class="why-choose-us-cards">
    <WhyChooseUsCard
      v-for="(card, index) in whyChooseUsCard"
      :key="index"
      :imageSrc="card.imageSrc"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>

<script setup lang="ts">
const whyChooseUsCard = [
  {
    imageSrc: "/images/star.png",
    title: "100%",
    description: "Project completion rate",
  },
  {
    imageSrc: "/images/star.png",
    title: "100%",
    description: "Project completion rate",
  },
  {
    imageSrc: "/images/star.png",
    title: "100%",
    description: "Project completion rate",
  },
  {
    imageSrc: "/images/star.png",
    title: "100%",
    description: "Project completion rate",
  },
];
</script>

<style scoped>
.why-choose-us-cards {
  @apply grid grid-cols-1 gap-x-4 gap-y-4  min-[800px]:grid-cols-2 min-[800px]:gap-y-4 min-[800px]:gap-x-6 min-[1120px]:grid-cols-4 min-[1120px]:gap-x-4;
}
</style>
