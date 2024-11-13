<template>
  <div :style="{ width: width }">
    <div>
      <div v-for="(item, index) in items" :key="index" class="group">
        <div :class="headerClasses" @click="toggleAccordion(index)">
          <!-- Conditionally render Start Icon based on variant -->
          <div v-if="hasStartIcon">
            <component :is="item.icon" class="h-12 w-12 text-primary mr-10" />
          </div>

          <!-- Title -->
          <DynaText
            tag="h1"
            color="academic-blue-900"
            size="lg"
            weight="semibold"
            class="flex-1 max-w-[478px] mr-auto leading-7"
          >
            {{ item.title }}
          </DynaText>

          <!-- Conditional rendering for Plus/Minus or Chevron Icon based on variant -->
          <div v-if="variant === 'icon'" class="text-academic-blue-400 pl-6">
            <component
              :is="isOpen(index) ? IconCircleMinus : IconCirclePlus"
              class="block h-[26px] w-6 transition-all duration-300"
            />
          </div>
          <div
            v-else-if="variant === 'chevron'"
            class="text-academic-blue-400 transition-transform duration-300"
          >
            <component
              :is="isOpen(index) ? iconChevUp : iconChevron"
              class="h-6 w-6 ml-6 text-academic-blue-400"
            />
          </div>
        </div>

        <!-- Content with transition effect -->
        <transition name="accordion">
          <DynaText
            tag="p"
            color="academic-blue-500"
            size="base"
            class="pb-4 max-w-[478px] leading-6"
            v-if="isOpen(index)"
          >
            {{ item.content }}</DynaText
          >
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  IconChevronDown,
  IconChevronUp,
  IconCircleMinus,
  IconCirclePlus,
} from "@tabler/icons-vue";
import { computed, defineProps, ref } from "vue";

// Define props for the component
interface Props {
  items: Array<{ title: string; content: string; icon?: any }>;
  variant?: "icon" | "chevron" | "simple"; // Different variants
  width?: string; // New width prop
}

const props = defineProps<Props>();

const openIndex = ref(-1);

// Determine if the accordion item is open
const isOpen = (index: number) => openIndex.value === index;

// Toggle the accordion item
const toggleAccordion = (index: number) => {
  openIndex.value = isOpen(index) ? -1 : index;
};

// Determine if start icon should be displayed based on the variant
const hasStartIcon = computed(() => props.variant !== "simple");

// Dynamically compute header classes based on variant prop
const headerClasses = computed(() => [
  "flex cursor-pointer list-none  py-4 text-lg font-medium text-primary", // Base classes
  props.variant === "icon" ? "with-icons" : "", // Add class for icon variant
  props.variant === "chevron" ? "with-chevron" : "", // Add class for chevron variant
]);

// Icon variables
const iconChevron = IconChevronDown;
const iconChevUp = IconChevronUp;
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  overflow: hidden;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 1000px; /* A large enough max-height to accommodate content */
  overflow: hidden;
}

.rotate-180 {
  transform: rotate(180deg);
}

/* Additional styles for variants */
</style>
