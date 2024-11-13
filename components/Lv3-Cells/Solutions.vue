<template>
  <div class="solutions">
    <!-- First Section -->
    <div
      @click="toggleSection(1)"
      :class="{
        'bg-vibrant-orange-100 pl-4  pt-4 pb-4 pr-8 rounded-lg': isOpen(1),
        'cursor-pointer flex gap-x-6  pl-4': true,
      }"
    >
      <div class="solutions__image">
        <NuxtImg
          src="/images/convenience.png"
          alt="hero"
          class="solutions__img"
        />
      </div>

      <div
        :class="{
          'flex flex-col justify-center': !isOpen(1),
          'flex flex-col justify-start': isOpen(1),
        }"
      >
        <DynaText
          tag="p"
          color="academic-blue-800"
          size="lg"
          weight="semibold"
          :class="{
            'text-center': !isOpen(1),
            'text-left': isOpen(1),
          }"
        >
          Seasoned experience
        </DynaText>
        <div v-if="isOpen(1)" class="mt-2">
          <DynaText
            tag="p"
            color="academic-blue-600"
            size="base"
            class="leading-6"
          >
            Walkzero products are the choice of over 50 companies in 26
            different countries, underscoring our global reach and the trust
            businesses place in us.
          </DynaText>
        </div>
      </div>
    </div>

    <!-- Second Section -->
    <div
      @click="toggleSection(2)"
      :class="{
        'bg-vibrant-orange-100 pl-4  pt-4 pb-4 pr-8 rounded-lg': isOpen(2),
        'cursor-pointer flex gap-x-6 pl-4': true,
      }"
    >
      <div class="solutions__image">
        <NuxtImg
          src="/images/convenience.png"
          alt="hero"
          class="solutions__img"
        />
      </div>

      <div
        :class="{
          'flex flex-col justify-center': !isOpen(2),
          'flex flex-col justify-start': isOpen(2),
        }"
      >
        <DynaText
          tag="p"
          color="academic-blue-800"
          size="lg"
          weight="semibold"
          :class="{
            'text-center': !isOpen(2),
            'text-left': isOpen(2),
          }"
        >
          Extensive partnership
        </DynaText>
        <div v-if="isOpen(2)" class="mt-2">
          <DynaText
            tag="p"
            color="academic-blue-600"
            size="base"
            class="leading-6"
          >
            Walkzero products are the choice of over 50 companies in 26
            different countries, underscoring our global reach and the trust
            businesses place in us.
          </DynaText>
        </div>
      </div>
    </div>

    <!-- Third Section  -->
    <div
      @click="toggleSection(3)"
      :class="{
        'bg-vibrant-orange-100 pl-4  pt-4 pb-4 pr-8 rounded-lg': isOpen(3),
        'cursor-pointer flex gap-x-6  pl-4': true,
      }"
    >
      <div class="solutions__image">
        <NuxtImg
          src="/images/convenience.png"
          alt="hero"
          class="solutions__img"
        />
      </div>

      <div
        :class="{
          'flex flex-col justify-center': !isOpen(3),
          'flex flex-col justify-start': isOpen(3),
        }"
      >
        <DynaText
          tag="p"
          color="academic-blue-800"
          size="lg"
          weight="semibold"
          :class="{
            'text-center': !isOpen(3),
            'text-left': isOpen(3),
          }"
        >
          Global satisfaction
        </DynaText>
        <div v-if="isOpen(3)" class="mt-2">
          <DynaText
            tag="p"
            color="academic-blue-600"
            size="base"
            class="leading-6"
          >
            Walkzero products are the choice of over 50 companies in 26
            different countries, underscoring our global reach and the trust
            businesses place in us.
          </DynaText>
        </div>
      </div>
    </div>

    <!-- 4th Section  -->
    <div
      @click="toggleSection(4)"
      :class="{
        'bg-vibrant-orange-100 pl-4  pt-4 pb-4 pr-8 rounded-lg': isOpen(4),
        'cursor-pointer flex gap-x-6  pl-4': true,
      }"
    >
      <div class="solutions__image">
        <NuxtImg
          src="/images/convenience.png"
          alt="hero"
          class="solutions__img"
        />
      </div>

      <div
        :class="{
          'flex flex-col justify-center': !isOpen(4),
          'flex flex-col justify-start': isOpen(4),
        }"
      >
        <DynaText
          tag="p"
          color="academic-blue-800"
          size="lg"
          weight="semibold"
          :class="{
            'text-center': !isOpen(4),
            'text-left': isOpen(4),
          }"
        >
          Award-winning excellence
        </DynaText>
        <div v-if="isOpen(4)" class="mt-2">
          <DynaText
            tag="p"
            color="academic-blue-600"
            size="base"
            class="leading-6"
          >
            Walkzero products are the choice of over 50 companies in 26
            different countries, underscoring our global reach and the trust
            businesses place in us.
          </DynaText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeSection = ref<number | null>(3);

// Toggle the active section
const toggleSection = (section: number) => {
  activeSection.value = activeSection.value === section ? null : section;
};

// Check if a section is open
const isOpen = (section: number) => {
  return activeSection.value === section;
};
</script>

<style scoped>
.solutions {
  @apply flex flex-col gap-y-6;
}

.solutions__image {
  @apply flex-shrink-0 w-10 h-10;
}
.solutions__img {
  @apply object-contain;
}
</style>
