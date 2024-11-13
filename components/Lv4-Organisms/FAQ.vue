<template>
  <div class="faq">
    <div class="container">
      <div class="faq__title">
        <DynaText
          tag="p"
          color="academic-blue-400"
          size="base"
          weight="semibold"
          class="leading-6"
        >
          Support
        </DynaText>
        <DynaText
          tag="h1"
          color="academic-blue-900"
          size="5xl"
          weight="semibold"
          class="leading-[44px]"
        >
          Frequently asked questions
        </DynaText>
        <DynaText
          tag="p"
          color="academic-blue-500"
          size="lg"
          weight="normal"
          class="leading-7"
        >
          Find answers to common questions about hiring vetted remote
          engineering talent and teams.
        </DynaText>
      </div>
      <Accordion
        :items="accordionItemsWithIcons"
        variant="icon"
        class="min-[1100px]:w-[60%]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const accordionItemsWithIcons = [
  {
    title: "What are the advantages of hiring remote developers and teams?",
    content:
      "Hiring remote developers and teams offers numerous benefits, including access to a global talent network, cost savings on office space and resources, increased productivity through flexible work hours, and the ability to quickly scale your development team as needed. Additionally, remote hiring allows you to close skill gaps efficiently, ensuring your projects progress without delays.",
  },
  {
    title: "What kind of talent does Dynamo provide?",
    content:
      "Hiring remote developers and teams offers numerous benefits, including access to a global talent network, cost savings on office space and resources, increased productivity through flexible work hours, and the ability to quickly scale your development team as needed. Additionally, remote hiring allows you to close skill gaps efficiently, ensuring your projects progress without delays.",
  },
  {
    title: "What other services does Dynamo offer?",
    content:
      "Hiring remote developers and teams offers numerous benefits, including access to a global talent network, cost savings on office space and resources, increased productivity through flexible work hours, and the ability to quickly scale your development team as needed. Additionally, remote hiring allows you to close skill gaps efficiently, ensuring your projects progress without delays.",
  },
  {
    title: "Why should I choose Dynamo for hiring remote software talent?",
    content:
      "Hiring remote developers and teams offers numerous benefits, including access to a global talent network, cost savings on office space and resources, increased productivity through flexible work hours, and the ability to quickly scale your development team as needed. Additionally, remote hiring allows you to close skill gaps efficiently, ensuring your projects progress without delays.",
  },
  {
    title: "How much time does it take to hire a remote developer?",
    content:
      "Hiring remote developers and teams offers numerous benefits, including access to a global talent network, cost savings on office space and resources, increased productivity through flexible work hours, and the ability to quickly scale your development team as needed. Additionally, remote hiring allows you to close skill gaps efficiently, ensuring your projects progress without delays.",
  },
];
</script>

<style scoped>
.faq {
  @apply bg-academic-blue-100 py-16;
}

.container {
  @apply max-w-[1216px] mx-auto px-6 flex min-[1100px]:flex-row flex-col gap-x-16 gap-y-4;
}

.faq__title {
  @apply flex flex-col gap-y-4;
}
</style>
