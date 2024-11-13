<template>
  <div class="hr-solutions">
    <div class="hr-solutions__content">
      <div class="hr-solutions__section-title">
        <DynaText
          tag="p"
          color="academic-blue-400"
          size="sm"
          weight="medium"
          class="leading-[18px]"
        >
          ALL-IN-ONE HR SOLUTIONS ON A SINGLE PLATFORM
        </DynaText>
        <DynaText
          tag="p"
          color="academic-blue-800"
          fluid="xl"
          weight="semibold"
          class="leading-[50px]"
        >
          Companies all over the world trust Dynamo
        </DynaText>
        <DynaText
          tag="p"
          color="academic-blue-600"
          size="lg"
          weight="medium"
          class="leading-6"
        >
          Our distinctive business model enables us to deliver vetted tech
          talents quick at reduced cost and guaranteed project-match
        </DynaText>
      </div>
      <!-- Accordion section -->
      <Solutions />
    </div>
    <div class="hr-solutions__image">
      <NuxtImg src="/images/hr.png" alt="hero" class="hr-solutions__img" />
    </div>
  </div>
  <DynaText
    tag="p"
    color="academic-blue-800"
    size="sm"
    weight="normal"
    class="max-w-[1216px] px-[24px] mx-auto leading-[18px] pt-4 text-center border-t-2 border-academic-blue-200 pb-20"
  >
    Nam id finibus neque. Mauris quis elit at eros dictum dignissim. In in nibh
    metus. Etiam ipsum ipsum, interdum id erat in, condimentum interdum ligula.
    Quisque imperdiet dolor ac mauris euismod vestibulum.
  </DynaText>
</template>

<script setup lang="ts">
// State for active section
</script>

<style scoped>
.hr-solutions {
  @apply max-w-[1216px]  min-[1100px]:items-start  items-center mx-auto px-6  flex flex-col min-[1100px]:flex-row gap-y-14 min-[1100px]:gap-x-12 pt-14;
}

.hr-solutions__content {
  @apply flex-1  min-[1100px]:max-w-[526px]  w-full flex flex-col gap-y-8 h-[650px];
}
.hr-solutions__image {
  @apply flex-1 max-w-[600px]  w-full;
}
.hr-solutions__img {
  @apply max-w-full h-auto;
}
.hr-solutions__section-title {
  @apply min-[1100px]:max-w-[526px] w-full flex flex-col gap-y-4 mt-7 text-center;
}
</style>
