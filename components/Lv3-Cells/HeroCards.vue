<template>
  <div class="hero-cards">
    <HeroCard
      v-for="(card, index) in heroCard"
      :key="index"
      :number="card.number"
      :text="card.text"
      :color="card.color"
      :textColor="card.textColor"
    />
  </div>
</template>

<script setup lang="ts">
const heroCard = [
  {
    number: "750+",
    text: "multi-domain IT Talents",
    color: "bg-vibrant-orange-600",
    textColor: "text-chromo-green-100",
  },
  {
    number: "75%",
    text: "save on overhead expenses",
    color: "bg-chromo-green-300",
    textColor: "text-academic-blue-800",
  },
  {
    number: "12",
    text: "days on-boarding",
    color: "bg-chromo-green-600",
    textColor: "text-chromo-green-100",
  },
  {
    number: "50%",
    text: "save on overhead expenses",
    color: "bg-vibrant-orange-200",
    textColor: "text-academic-blue-800",
  },
];
</script>

<style scoped>
.hero-cards {
  @apply min-[1030px]:max-w-[510px] min-[600px]:max-w-[410px] max-w-[320px]  grid grid-cols-2 min-[1030px]:grid-cols-4 gap-2;
}
</style>
