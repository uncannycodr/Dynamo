<template>
  <div class="dynamo-timeline">
    <div class="dynamo-timeline__content">
      <div class="dynamo-timeline__image">
        <NuxtImg
          src="/images/dynamo.png"
          alt="hero"
          class="dynamo-timeline__img"
        />
      </div>
      <DynaText
        tag="p"
        color="chromo-green-100"
        size="sm"
        weight="normal"
        class="leading-5"
      >
        Our distinctive business model enables us to deliver vetted tech talents
      </DynaText>
    </div>
    <div class="dynamo-timeline__timeline">
      <DynaText
        tag="p"
        color="chromo-green-100"
        size="base"
        weight="normal"
        class="dynamo-timeline__text"
      >
        1-3 weeks
      </DynaText>
      <DynaText
        tag="p"
        color="chromo-green-100"
        size="base"
        weight="normal"
        class="dynamo-timeline__text"
      >
        Yes
      </DynaText>
      <DynaText
        tag="p"
        color="chromo-green-100"
        size="base"
        weight="normal"
        class="dynamo-timeline__text"
      >
        Yes
      </DynaText>
      <DynaText
        tag="p"
        color="chromo-green-100"
        size="base"
        weight="normal"
        class="dynamo-timeline__text"
      >
        Yes
      </DynaText>
      <DynaText
        tag="p"
        color="chromo-green-100"
        size="base"
        weight="normal"
        class="dynamo-timeline__text"
      >
        Low
      </DynaText>
      <DynaText
        tag="p"
        color="chromo-green-100"
        size="base"
        weight="normal"
        class="dynamo-timeline__text"
      >
        Easy
      </DynaText>
      <DynaText
        tag="p"
        color="chromo-green-100"
        size="base"
        weight="normal"
        class="leading-5 py-3"
      >
        Very high
      </DynaText>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.dynamo-timeline {
  @apply w-full flex flex-col  bg-gradient-to-b from-chromo-green-900 to-chromo-green-1000 rounded-2xl;
}
.dynamo-timeline__content {
  @apply flex flex-col gap-6  text-center py-6 px-[18px] items-center;
}
.dynamo-timeline__image {
  @apply text-center;
}
.dynamo-timeline__img {
  @apply max-w-[100%];
}
.dynamo-timeline__timeline {
  @apply flex flex-col items-center;
}

.dynamo-timeline__text {
  @apply leading-5 border-b border-chromo-green-800 w-full text-center pb-4 pt-2;
}
</style>
