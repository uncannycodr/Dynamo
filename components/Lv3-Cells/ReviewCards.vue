<template>
  <div class="review-cards">
    <ReviewCard
      v-for="(card, index) in reviewCard"
      :key="index"
      :photoSrc="card.photoSrc"
      :imageSrc="card.imageSrc"
      :description="card.description"
      :name="card.name"
      :position="card.position"
    />
  </div>
</template>

<script setup lang="ts">
const reviewCard = [
  {
    photoSrc: "/images/man.png",
    imageSrc: "/images/branding.png",
    description:
      "Dynoma offers a cloud-based HR management solution designed to streamline your employee onboarding, leave and attendance tracking, and document management.",
    name: "Ed Colyer",
    position: "Co founder / company names",
  },
  {
    photoSrc: "/images/man.png",
    imageSrc: "/images/branding.png",
    description:
      "Dynoma offers a cloud-based HR management solution designed to streamline your employee onboarding, leave and attendance tracking, and document management.",
    name: "Ed Colyer",
    position: "Co founder / company names",
  },
  {
    photoSrc: "/images/man.png",
    imageSrc: "/images/branding.png",
    description:
      "Dynoma offers a cloud-based HR management solution designed to streamline your employee onboarding, leave and attendance tracking, and document management.",
    name: "Ed Colyer",
    position: "Co founder / company names",
  },
  {
    photoSrc: "/images/man.png",
    imageSrc: "/images/branding.png",
    description:
      "Dynoma offers a cloud-based HR management solution designed to streamline your employee onboarding, leave and attendance tracking, and document management.",
    name: "Ed Colyer",
    position: "Co founder / company names",
  },
  {
    photoSrc: "/images/man.png",
    imageSrc: "/images/branding.png",
    description:
      "Dynoma offers a cloud-based HR management solution designed to streamline your employee onboarding, leave and attendance tracking, and document management.",
    name: "Ed Colyer",
    position: "Co founder / company names",
  },
  {
    photoSrc: "/images/man.png",
    imageSrc: "/images/branding.png",
    description:
      "Dynoma offers a cloud-based HR management solution designed to streamline your employee onboarding, leave and attendance tracking, and document management.",
    name: "Ed Colyer",
    position: "Co founder / company names",
  },
];
</script>

<style scoped>
.review-cards {
  @apply grid grid-cols-1 min-[800px]:grid-cols-2 min-[1100px]:grid-cols-3 gap-10;
}
</style>
