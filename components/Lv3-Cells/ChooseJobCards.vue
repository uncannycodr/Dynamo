<template>
  <div class="choose-job-cards">
    <ChooseJobCard
      v-for="(card, index) in chooseJobCard"
      :key="index"
      :imageSrc="card.imageSrc"
      :title="card.title"
      :desc1="card.desc1"
      :desc2="card.desc2"
      :desc3="card.desc3"
    />
  </div>
</template>

<script setup lang="ts">
const chooseJobCard = [
  {
    imageSrc: "/images/full-time.png",
    title: "Full-time",
    desc1: "Full-time employment at global companies",
    desc2: "Direct access to hiring managers",
    desc3: "Competitive, above-market salaries",
  },
  {
    imageSrc: "/images/freelance.png",
    title: "Freelance jobs",
    desc1: "Flexible part-time and full-time contracts",
    desc2: "Payment based on your preferred hourly rate",
    desc3: "Easy logistics for contracts and payment",
  },
];
</script>

<style scoped>
.choose-job-cards {
  @apply grid min-[1000px]:grid-cols-2 grid-cols-1 gap-[24px] min-[1000px]:gap-[40px];
}
</style>
