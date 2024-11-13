<template>
  <div class="choose-job">
    <div class="choose-job__section-title">
      <DynaText
        tag="p"
        color="academic-blue-400"
        size="sm"
        weight="medium"
        class="leading-[18px]"
      >
        HIRE DEVELOPERS FROM THE LARGEST AI-VETTED TALENT NETWORK
      </DynaText>
      <DynaText
        tag="p"
        color="academic-blue-800"
        fluid="xl"
        weight="semibold"
        class="leading-[50px]"
      >
        Choose how you wish to work.
      </DynaText>
      <DynaText
        tag="p"
        color="academic-blue-600"
        size="lg"
        weight="medium"
        class="leading-6"
      >
        Our distinctive business model enables us to deliver vetted tech talents
        quick at reduced cost and guaranteed project-match
      </DynaText>
    </div>
    <ChooseJobCards />
    <DynaText
      tag="p"
      color="academic-blue-800"
      size="sm"
      weight="normal"
      class="leading-[18px] pt-6 text-center border-t-2"
    >
      Nam id finibus neque. Mauris quis elit at eros dictum dignissim. In in
      nibh metus. Etiam ipsum ipsum, interdum id erat in, condimentum interdum
      ligula. Quisque imperdiet dolor ac mauris euismod vestibulum. 
    </DynaText>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.choose-job {
  @apply max-w-[1216px] px-[24px] mx-auto flex flex-col gap-12 p-20;
}
.choose-job__section-title {
  @apply max-w-[580px] mx-auto flex flex-col items-center text-center gap-4;
}
</style>
