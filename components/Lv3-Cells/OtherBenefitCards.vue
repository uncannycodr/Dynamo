<template>
  <div class="other-benefit-cards">
    <OtherBenefitCard
      v-for="(card, index) in otherBenefitCardCard"
      :key="index"
      :imageSrc="card.imageSrc"
      :description="card.description"
      :title="card.title"
    />
  </div>
</template>

<script setup lang="ts">
const otherBenefitCardCard = [
  {
    imageSrc: "/images/medal.png",
    title: "Effective and hassle-free",
    description:
      "Get job matches tailored to your profile and connect directly with hiring managers.",
  },
  {
    imageSrc: "/images/medal.png",
    title: "Better pay and growth",
    description:
      "Earn above-market pay by solving challenging problems at diverse companies worldwide.",
  },
  {
    imageSrc: "/images/medal.png",
    title: "Competitive edge",
    description:
      "Impress employers by being vetted for your communication and domain expertise.",
  },
  {
    imageSrc: "/images/medal.png",
    title: "Personal support",
    description:
      "Receive personalized support throughout your job search, interview, and negotiation process from Dynamo talent partners.",
  },
];
</script>

<style scoped>
.other-benefit-cards {
  @apply max-w-[1216px] mx-auto px-6 grid grid-cols-1 min-[1000px]:grid-cols-2 gap-4 py-24;
}
</style>
