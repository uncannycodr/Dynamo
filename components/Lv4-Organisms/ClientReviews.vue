<template>
  <div class="client-reviews">
    <div class="container">
      <div class="client-reviews-title">
        <DynaText
          tag="p"
          color="chromo-green-400"
          size="sm"
          weight="medium"
          class="leading-[18px]"
        >
          TECH RECRUITING SUCCESS STORIES
        </DynaText>
        <DynaText
          tag="p"
          color="academic-blue-100"
          fluid="xl"
          weight="semibold"
          class="lg:leading-[50px] leading-10"
        >
          Don't take our word for it. Hear what our customers say.
        </DynaText>
        <DynaText
          tag="p"
          color="chromo-green-400"
          size="lg"
          weight="medium"
          class="leading-6"
        >
          Our distinctive business model enables us to deliver vetted tech
          talents quick at reduced cost and guaranteed project-match
        </DynaText>
      </div>
      <ReviewCards />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.client-reviews {
  @apply bg-chromo-green-1000 pt-20 pb-20;
}
.container {
  @apply max-w-[1216px] mx-auto px-6 flex flex-col gap-y-12;
}
.client-reviews-title {
  @apply max-w-[600px] mx-auto flex flex-col  gap-y-6  text-center;
}
</style>
