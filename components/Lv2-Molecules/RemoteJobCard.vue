<template>
  <div class="designers-container">
    <div class="designers-header">
      <p class="designers-title">Designers</p>
      <div class="designers-line"></div>
    </div>
    <div class="designers-buttons">
      <div class="designer-button">Product design</div>
      <div class="designer-button">Visual design</div>
      <div class="designer-button">UX design</div>
      <div class="designer-button">UI design</div>
    </div>
  </div>
</template>

<script setup>
// Script if needed (You can leave it empty for now)
</script>

<style scoped>
.designers-container {
  @apply p-6;
  font-family: "Zilla Slab", serif;
}

.designers-header {
  @apply flex items-center gap-4 mb-4; /* Flex to place title and line next to each other */
}

.designers-title {
  @apply text-gray-500 text-sm font-medium tracking-widest;
}

.designers-line {
  @apply flex-1 border-t border-gray-300; /* Line takes up remaining space */
}

.designers-buttons {
  @apply flex flex-col gap-4;
}

.designer-button {
  @apply border border-academic-blue-300 bg-academic-blue-100 py-3 px-6 rounded-2xl text-gray-600 text-base text-center shadow-md tracking-widest;
}
</style>
