<template>
  <div class="tech-recruitment">
    <div class="container">
      <SectionTitle
        caption="TECH RECRUITING & HIRING RESOURCES"
        heading="Tired of traditional recruiting to hire?"
        paragraph="Our distinctive business model enables us to deliver vetted tech talents quick at reduced cost and guaranteed project-match"
        class="mx-auto"
      />
      <div class="tech-recruitment__mobile">
        <div class="flex flex-col gap-3 pb-4">
          <DynaText
            tag="p"
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
            class="leading-[18px]"
          >
            Our distinctive business model enables us to deliver vetted tech
            talents
          </DynaText>
        </div>
        <div class="tech-recruitment__timelines">
          <div class="tech-recruitment__timeline1">
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="tech-recruitment__text"
            >
              Time taken to hire a talent
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="tech-recruitment__text"
            >
              Proven Vetting process used
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="tech-recruitment__text"
            >
              Long Term commitment
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="tech-recruitment__text"
            >
              Technology & culture match
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="tech-recruitment__text"
              >Hiring & employment cost
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="tech-recruitment__text"
            >
              Scaling of team
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="pt-2"
            >
              Success Rate
            </DynaText>
          </div>

          <!-- ------- -->
          <div class="tech-recruitment__timeline1 text-center">
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="tech-recruitment__text"
            >
              1-2 months
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="tech-recruitment__text"
            >
              No
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="tech-recruitment__text"
            >
              Yes
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="tech-recruitment__text"
            >
              No
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="tech-recruitment__text"
              >Medium
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="tech-recruitment__text"
            >
              Challenging
            </DynaText>
            <DynaText
              tag="p"
              color="academic-blue-800"
              size="base"
              weight="normal"
              class="pt-2"
            >
              Medium
            </DynaText>
          </div>
        </div>
      </div>
      <div class="tech-recruitment__content">
        <div class="tech-recruitment__timeline">
          <DynaText
            tag="p"
            color="academic-blue-800"
            size="base"
            weight="normal"
            class="tech-recruitment__text"
          >
            Time taken to hire a talent
          </DynaText>
          <DynaText
            tag="p"
            color="academic-blue-800"
            size="base"
            weight="normal"
            class="tech-recruitment__text"
          >
            Proven Vetting process used
          </DynaText>
          <DynaText
            tag="p"
            color="academic-blue-800"
            size="base"
            weight="normal"
            class="tech-recruitment__text"
          >
            Long Term commitment
          </DynaText>
          <DynaText
            tag="p"
            color="academic-blue-800"
            size="base"
            weight="normal"
            class="tech-recruitment__text"
          >
            Technology & culture match
          </DynaText>
          <DynaText
            tag="p"
            color="academic-blue-800"
            size="base"
            weight="normal"
            class="tech-recruitment__text"
            >Hiring & employment cost
          </DynaText>
          <DynaText
            tag="p"
            color="academic-blue-800"
            size="base"
            weight="normal"
            class="tech-recruitment__text"
          >
            Scaling of team
          </DynaText>
          <DynaText
            tag="p"
            color="academic-blue-800"
            size="base"
            weight="normal"
            class="pt-2"
          >
            Success Rate
          </DynaText>
        </div>

        <TimelineCard />
        <TimelineCard />
        <DynamoTimelineCard />
      </div>
      <DynaText
        tag="p"
        color="academic-blue-800"
        size="sm"
        weight="normal"
        class="max-w-[1216px] px-[24px] mx-auto leading-[18px] pt-4 text-center"
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
.tech-recruitment {
  @apply bg-academic-blue-100 py-20;
}
.container {
  @apply max-w-[1216px] px-[24px] mx-auto flex flex-col gap-8;
}

.tech-recruitment__timeline {
  @apply w-full flex flex-col justify-center mt-[170px] h-[279px];
}
.tech-recruitment__timeline1 {
  @apply w-full flex flex-col justify-center;
}

.tech-recruitment__text {
  @apply leading-5 border-b border-academic-blue-200  pb-3 pt-3;
}
.tech-recruitment__content {
  @apply min-[1180px]:gap-x-10 min-[1180px]:items-center bg-white min-[1180px]:grid min-[1180px]:grid-cols-4 py-10 px-10 rounded-2xl hidden;
}
.tech-recruitment__mobile {
  @apply flex flex-col  min-[1180px]:hidden  bg-white p-5;
}
.tech-recruitment__timelines {
  @apply grid grid-cols-2 gap-7;
}
</style>
