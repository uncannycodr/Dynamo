<template>
  <!-- HeroSection.vue -->
  <div class="hero">
    <div class="hero__container">
      <div class="hero__upper">
        <div class="hero__content">
          <DynaText
            tag="p"
            color="academic-blue-400"
            size="sm"
            weight="medium"
            class="leading-[18px]"
          >
            FOR COMPANIES
          </DynaText>
          <div class="hero__title">
            <DynaText
              tag="h1"
              color="academic-blue-800"
              fluid="2xl"
              weight="semibold"
              class="leading-[62px]"
            >
              Expert remote developers to your team in just two weeks.
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-600"
              size="lg"
              weight="medium"
              class="leading-[24.3px]"
            >
              Tap into a network of over 4,000 software engineers, aligned with
              your timezone, skilled in over 100 technologies.
            </DynaText>
          </div>
          <div>
            <DynaButton as="button" variant="primary"
              >Schedule a call</DynaButton
            >
          </div>
          <div class="hero__text">
            <DynaText
              tag="p"
              color="academic-blue-600"
              size="base"
              weight="normal"
              class="leading-[21.6px]"
            >
              Start 2-week risk free trial now
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-500"
              size="sm"
              weight="normal"
              class="leading-[18px]"
            >
              Bypass the lengthy hiring process. Expand your team instantly with
              a single click.
            </DynaText>
          </div>
        </div>

        <div class="hero__image-wrapper">
          <div class="hero__image">
            <NuxtImg src="/images/hero.png" alt="hero" class="hero__img" />
          </div>
          <HeroCards
            class="relative min-[1030px]:bottom-20 min-[1030px]:left-6 min-[600px]:mx-0 min-[600px]:bottom-40 min-[600px]:left-16 bottom-40 left-2 min-[300px]:mx-auto"
          />
        </div>
      </div>
      <div class="hero__lower">
        <ClientLogos />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  @apply bg-chromo-green-200; /* Add some padding for breathing space */
}
.hero__container {
  @apply max-w-[1216px] mx-auto flex flex-col px-4 pt-20 pb-20; /* Padding for mobile */
}
.hero__upper {
  @apply flex flex-col min-[1030px]:flex-row min-[1000px]:gap-x-16 min-[1130px]:items-center min-[1130px]:justify-between; /* Stack on mobile, row on larger screens */
}
.hero__content {
  @apply flex-1 w-full  min-[1030px]:w-[569px] mb-20; /* Grow content proportionally, max width for large screens */
}
.hero__image {
  @apply min-[1030px]:flex-1 min-[1030px]:max-w-[551px] w-full; /* Grow image proportionally, max width for large screens */
}
.hero__img {
  @apply max-w-full h-auto; /* Ensure the image scales properly */
}
.hero__title {
  @apply flex flex-col gap-y-4 mt-4 mb-8;
}
.hero__text {
  @apply min-[1030px]:max-w-[300px] w-full flex flex-col mt-6 gap-y-4;
}
.hero__lower {
  @apply mt-1;
}
.hero__image-wrapper {
  @apply relative;
}
</style>
