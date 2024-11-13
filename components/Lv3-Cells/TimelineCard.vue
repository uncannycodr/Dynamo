<template>
  <div class="timeline-card">
    <div class="timeline-card__content">
      <DynaText
        tag="h2"
        color="academic-blue-800"
        size="xl"
        weight="semibold"
        class="leading-6"
      >
        Classic recruitment agency
      </DynaText>
      <DynaText
        tag="p"
        color="academic-blue-500"
        size="sm"
        weight="normal"
        class="leading-5"
      >
        Our distinctive business model enables us to deliver vetted tech talents
      </DynaText>
    </div>
    <div class="timeline-card__timeline">
      <DynaText
        tag="p"
        color="academic-blue-800"
        size="base"
        weight="normal"
        class="timeline-card__text"
      >
        1-2 months
      </DynaText>
      <DynaText
        tag="p"
        color="academic-blue-800"
        size="base"
        weight="normal"
        class="timeline-card__text"
      >
        No
      </DynaText>
      <DynaText
        tag="p"
        color="academic-blue-800"
        size="base"
        weight="normal"
        class="timeline-card__text"
      >
        Yes
      </DynaText>
      <DynaText
        tag="p"
        color="academic-blue-800"
        size="base"
        weight="normal"
        class="timeline-card__text"
      >
        No
      </DynaText>
      <DynaText
        tag="p"
        color="academic-blue-800"
        size="base"
        weight="normal"
        class="timeline-card__text"
        >Medium
      </DynaText>
      <DynaText
        tag="p"
        color="academic-blue-800"
        size="base"
        weight="normal"
        class="timeline-card__text"
      >
        Challenging
      </DynaText>
      <DynaText
        tag="p"
        color="academic-blue-800"
        size="base"
        weight="normal"
        class="leading-5 py-3"
      >
        Medium
      </DynaText>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.timeline-card {
  @apply w-full flex flex-col gap-y-4 mt-9;
}
.timeline-card__content {
  @apply flex flex-col gap-y-6 text-center;
}
.timeline-card__timeline {
  @apply flex flex-col  items-center;
}

.timeline-card__text {
  @apply leading-5 border-b border-academic-blue-200 w-full text-center pb-4 pt-2;
}
</style>
