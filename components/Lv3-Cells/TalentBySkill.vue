<template>
  <div class="talent-by-skill">
    <div class="talent-by-skill__image">
      <div class="talent-by-skill__icons">
        <NuxtImg
          src="/images/box.png"
          alt="hero"
          class="talent-by-skill__img"
        />
        <NuxtImg
          src="/images/AAA.png"
          alt="hero"
          class="talent-by-skill__img"
        />
        <NuxtImg
          src="/images/avatar.png"
          alt="hero"
          class="talent-by-skill__img"
        />
        <NuxtImg
          src="/images/umbrella.png"
          alt="hero"
          class="talent-by-skill__img"
        />
        <NuxtImg
          src="/images/code.png"
          alt="hero"
          class="talent-by-skill__img"
        />
        <NuxtImg
          src="/images/fire.png"
          alt="hero"
          class="talent-by-skill__img"
        />
        <NuxtImg
          src="/images/AAA.png"
          alt="hero"
          class="talent-by-skill__img"
        />
        <NuxtImg
          src="/images/avatar.png"
          alt="hero"
          class="talent-by-skill__img"
        />
        <NuxtImg
          src="/images/umbrella.png"
          alt="hero"
          class="talent-by-skill__img"
        />
        <NuxtImg
          src="/images/code.png"
          alt="hero"
          class="talent-by-skill__img"
        />
        <NuxtImg
          src="/images/fire.png"
          alt="hero"
          class="talent-by-skill__img"
        />
      </div>
      <NuxtImg
        src="/images/branch.png"
        alt="hero"
        class="talent-by-skill__img bg-cover"
      />
    </div>
    <div class="talent-by-skill__talent">
      <div class="talent-by-skill__row1">
        <DynaText
          tag="p"
          color="chromo-green-1000"
          size="lg"
          weight="normal"
          class="talent-by-skill__text"
        >
          Full-stack developer
        </DynaText>
        <DynaText
          tag="p"
          color="chromo-green-1000"
          size="lg"
          weight="normal"
          class="talent-by-skill__text"
        >
          Back-end Developers
        </DynaText>
        <DynaText
          tag="p"
          color="chromo-green-1000"
          size="lg"
          weight="normal"
          class="talent-by-skill__text"
        >
          Front-end Developers
        </DynaText>
        <DynaText
          tag="p"
          color="chromo-green-1000"
          size="lg"
          weight="normal"
          class="talent-by-skill__text"
        >
          DevOps Engineers
        </DynaText>
      </div>
      <div class="talent-by-skill__row2">
        <DynaText
          tag="p"
          color="chromo-green-1000"
          size="lg"
          weight="normal"
          class="talent-by-skill__text"
        >
          Data Scientists
        </DynaText>
        <DynaText
          tag="p"
          color="chromo-green-1000"
          size="lg"
          weight="normal"
          class="talent-by-skill__text"
        >
          Data Engineers
        </DynaText>
        <DynaText
          tag="p"
          color="chromo-green-1000"
          size="lg"
          weight="normal"
          class="talent-by-skill__text"
        >
          Mobile Developers
        </DynaText>
        <DynaText
          tag="p"
          color="chromo-green-1000"
          size="lg"
          weight="normal"
          class="talent-by-skill__text"
        >
          App Developers
        </DynaText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.talent-by-skill {
  @apply flex flex-col gap-y-24;
}
.talent-by-skill__icons {
  @apply flex flex-wrap gap-x-5 gap-y-3 items-center justify-center;
}
.talent-by-skill__image {
  @apply flex flex-col items-center gap-9 pt-8;
}

.talent-by-skill .talent-by-skill__talent {
  @apply flex flex-col gap-y-[20px] min-[1280px]:items-center;
}
.talent-by-skill__row1 {
  @apply grid min-[1280px]:grid-cols-4    min-[708px]:grid-cols-2 grid-cols-1 gap-y-4 gap-x-5;
}
.talent-by-skill__row2 {
  @apply grid min-[1280px]:grid-cols-4    min-[708px]:grid-cols-2 grid-cols-1 gap-y-4 gap-x-5;
}
.talent-by-skill__text {
  @apply lg:w-auto w-full px-6 py-4 text-center  leading-[17.9px] tracking-widest border-[3px] border-chromo-green-400 rounded-2xl;
  font-family: "Zilla Slab", serif;
}
</style>
