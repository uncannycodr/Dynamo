<template>
  <div class="talent-pool">
    <div class="container">
      <SectionTitle
        caption="HIRE DEVELOPERS FROM THE LARGEST AI-VETTED TALENT NETWORK"
        heading="Find on-demand talent by skill, role, or seniority"
        paragraph="Our distinctive business model enables us to deliver vetted tech talents quick at reduced cost and guaranteed project-match"
        class="mx-auto"
      />
      <TalentBySkill />
      <DynaText
        tag="p"
        color="academic-blue-800"
        size="sm"
        weight="normal"
        class="leading-[18px] pt-8 text-center max-w-[1296px] mx-auto"
      >
        Nam id finibus neque. Mauris quis elit at eros dictum dignissim. In in
        nibh metus. Etiam ipsum ipsum, interdum id erat in, condimentum interdum
        ligula. Quisque imperdiet dolor ac mauris euismod vestibulum. 
      </DynaText>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.talent-pool {
  @apply bg-chromo-green-100  flex flex-col pt-20 pb-20;
}
.container {
  @apply px-[24px] mx-auto;
}
</style>
