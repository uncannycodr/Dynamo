<template>
  <!-- HeroSection.vue -->
  <div class="talent">
    <div class="talent__container">
      <div class="talent__upper">
        <div class="talent__content">
          <DynaText
            tag="p"
            color="academic-blue-400"
            size="sm"
            weight="medium"
            class="leading-[18px]"
          >
            FOR COMPANIES
          </DynaText>
          <div class="talent__title">
            <DynaText
              tag="h1"
              color="academic-blue-800"
              fluid="2xl"
              weight="semibold"
              class="leading-[62px]"
            >
              Work in the way that suits you best in the world.
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-600"
              size="lg"
              weight="medium"
              class="leading-[24.3px]"
            >
              Dynamo is the top destination for finding freelance and full-time
              remote jobs for developers, designers, and marketers. Get matched
              with US-based startups and tech companies.
            </DynaText>
          </div>
          <div class="flex min-[600px]:flex-row flex-col gap-6">
            <DynaButton as="button" variant="primary"
              >Find remote jobs</DynaButton
            >
            <DynaButton as="button" variant="outline">Hire talent</DynaButton>
          </div>
          <div class="talent__text">
            <!-- <DynaText
              tag="p"
              color="academic-blue-600"
              size="base"
              weight="normal"
              class="leading-[21.6px]"
            >
              Looking to hire Remote Developers? Talk to us
            </DynaText> -->
            <p class="text-base text-academic-blue-600 leading-[21.6px] pb-8">
              Looking to hire Remote Developers? <span
                class="text-chromo-green-900 font-semibold cursor-pointer"
              >
                Talk to us
              </span>
            </p>
            <DynaText
              tag="p"
              color="academic-blue-500"
              size="sm"
              weight="normal"
              class="leading-[18px]"
            >
              Bypass the lengthy hiring process.
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-500"
              size="sm"
              weight="normal"
              class="leading-[18px] pt-1"
            >
              Join our team with the easy interview process.
            </DynaText>
          </div>
        </div>

        <div class="talent__image">
          <NuxtImg
            src="/images/talenthero.png"
            alt="hero"
            class="talent__img"
          />
        </div>
      </div>
      <div class="talent__lower">
        <ClientLogos />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.talent {
  @apply bg-academic-blue-100; /* Add some padding for breathing space */
}
.talent__container {
  @apply max-w-[1216px] mx-auto flex flex-col px-4 pt-20 pb-20; /* Padding for mobile */
}
.talent__upper {
  @apply flex flex-col min-[1030px]:flex-row min-[1000px]:gap-x-16 min-[1130px]:items-center min-[1130px]:justify-between; /* Stack on mobile, row on larger screens */
}
.talent__content {
  @apply flex-1 w-full  min-[1030px]:w-[569px] mb-20; /* Grow content proportionally, max width for large screens */
}
.talent__image {
  @apply min-[1030px]:flex-1 min-[1030px]:max-w-[551px] w-full; /* Grow image proportionally, max width for large screens */
}
.talent__img {
  @apply max-w-full h-auto; /* Ensure the image scales properly */
}
.talent__title {
  @apply flex flex-col gap-y-4 mt-4 mb-8;
}
.talent__text {
  @apply min-[1030px]:max-w-[400px] w-full flex flex-col mt-6;
}
.talent__lower {
  @apply mt-1;
}
.talent__image-wrapper {
  @apply relative;
}
</style>
