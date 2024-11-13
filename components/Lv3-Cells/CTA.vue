<template>
  <div class="cta">
    <div class="cta__content">
      <DynaText
        tag="p"
        color="academic-blue-400"
        size="sm"
        weight="medium"
        class="leading-[18px]"
      >
        ACCELERATING INNOVATION
      </DynaText>
      <DynaText
        tag="h1"
        color="academic-blue-800"
        fluid="3xl"
        weight="bold"
        class="min-[1000px]:leading-[64px] leading-[50px]"
      >
        Ready to start your 2-week trial?
      </DynaText>
      <DynaText
        tag="p"
        color="academic-blue-500"
        size="lg"
        weight="medium"
        class="leading-6"
      >
        Our distinctive business model enables us to deliver vetted tech talents
        quick at reduced cost and guaranteed project-match
      </DynaText>
    </div>
    <div class="cta__action">
      <div>
        <DynaButton as="button" variant="secondary">Schedule a call</DynaButton>
      </div>
      <DynaText
        tag="p"
        color="academic-blue-800"
        size="lg"
        weight="normal"
        class="leading-5 opacity-60 max-w-[360px]"
      >
        Skip the months-long hiring process. Scale your team with the click of a
        button
      </DynaText>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.cta {
  @apply mx-auto px-6 flex flex-col gap-y-10 items-center pt-20 pb-20;
}

.cta__content {
  @apply max-w-[650px] flex flex-col gap-y-4 items-center text-center;
}

.cta__action {
  @apply flex flex-col gap-y-4 items-center text-center;
}
</style>
