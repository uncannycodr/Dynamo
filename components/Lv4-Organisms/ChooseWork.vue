<template>
  <div class="choose-work">
    <div class="container">
      <div class="choose-work__section-title">
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
          class="min-[1030px]:leading-[50px] leading-10"
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
          Our distinctive business model enables us to deliver vetted tech
          talents quick at reduced cost and guaranteed project-match
        </DynaText>
        <div class="mt-8">
          <DynaButton as="button" variant="primary"
            >Join Dynamo today
          </DynaButton>
        </div>
      </div>
      <ChooseWorkCards />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.choose-work {
  @apply bg-academic-blue-100 py-20;
}

.container {
  @apply max-w-[1216px] mx-auto px-6 flex min-[1030px]:flex-row flex-col 
   min-[1030px]:gap-12 gap-14;
}
.choose-work__section-title {
  @apply max-w-[564px] flex flex-col gap-y-4;
}
</style>
