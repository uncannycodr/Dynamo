<template>
  <div class="benefit-cards">
    <BenefitCard
      v-for="(benefit, index) in benefitCard"
      :key="index"
      :imageSrc="benefit.imageSrc"
      :title="benefit.title"
      :description="benefit.description"
    />
  </div>
</template>

<script setup lang="ts">
const benefitCard = [
  {
    imageSrc: "/images/quality.png",
    title: "Top-Quality",
    description:
      "Only 1% of developers pass our stringent technical and communication assessment means you will get only the best of the best.",
  },
  {
    imageSrc: "/images/money.png",
    title: "Value for Money",
    description:
      "You don't have to break the bank to hire skilled developers. We offer high-quality professionals at 75% lower cost than your local market.",
  },
  {
    imageSrc: "/images/dedication.png",
    title: "Dedication",
    description:
      "Your chosen developer will work for you full-time, under your control, in your time zone, with a minimum of 4 hours overlap.",
  },
  {
    imageSrc: "/images/convenience.png",
    title: "Convenience",
    description:
      "We handle all local laws, EOR, NDAs, payments, employee benefits, and all other boring stuff so you can focus on your core business.",
  },
];
</script>

<style scoped>
.benefit-cards {
  @apply grid grid-cols-1  gap-x-4 min-[800px]:grid-cols-2 min-[1120px]:grid-cols-4;
}
</style>
