<template>
  <div class="client-logos-wrapper">
    <DynaText tag="p" color="academic-blue-400" size="base" weight="normal">
      Leading enterprises, startups, and more have trusted Dynamo
    </DynaText>
    <div class="client-logos">
      <div class="client-logos__image">
        <NuxtImg src="/images/acme.png" alt="hero" class="client-logos__img" />
      </div>
      <div class="client-logos__image">
        <NuxtImg
          src="/images/alt+shift.png"
          alt="hero"
          class="client-logos__img"
        />
      </div>
      <div class="client-logos__image">
        <NuxtImg
          src="/images/bolt-shift.png"
          alt="hero"
          class="client-logos__img"
        />
      </div>
      <div class="client-logos__image">
        <NuxtImg
          src="/images/catalog.png"
          alt="hero"
          class="client-logos__img"
        />
      </div>
      <div class="client-logos__image">
        <NuxtImg src="/images/epic.png" alt="hero" class="client-logos__img" />
      </div>
      <div class="client-logos__image">
        <NuxtImg src="/images/focal.png" alt="hero" class="client-logos__img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.client-logos-wrapper {
  @apply flex flex-col gap-y-8;
}
.client-logos {
  @apply flex flex-wrap gap-x-[40px];
}

.client-logos__img {
  /* @apply w-[122px] h-[34px]; */

  filter: brightness(0) saturate(100%) invert(20%) sepia(13%) saturate(2034%)
    hue-rotate(175deg) brightness(91%) contrast(84%);
}
</style>
