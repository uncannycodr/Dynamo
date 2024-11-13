<template>
  <div class="footer">
    <div class="container">
      <div class="footer__branding">
        <div class="footer__image">
          <NuxtImg src="/images/flogo.png" alt="hero" class="footer__img" />
        </div>
        <DynaText
          tag="p"
          color="chromo-green-100"
          size="xl"
          weight="semibold"
          class="leading-6"
        >
          A quick and convenient way to hire top quality remote developers!
        </DynaText>
        <div class="footer__socials">
          <div class="footer__follow">
            <DynaText
              tag="p"
              color="chromo-green-100"
              size="base"
              weight="normal"
              class="leading-4"
            >
              Follow us
            </DynaText>
            <div class="flex flex-row gap-x-3">
              <div class="footer__icons">
                <NuxtImg
                  src="/images/twitter.png"
                  alt="hero"
                  class="footer__icon"
                />
              </div>
              <div class="footer__icons">
                <NuxtImg
                  src="/images/youtube.png"
                  alt="hero"
                  class="footer__icon"
                />
              </div>
              <div class="footer__icons">
                <NuxtImg
                  src="/images/insta.png"
                  alt="hero"
                  class="footer__icon"
                />
              </div>
              <div class="footer__icons">
                <NuxtImg
                  src="/images/linkedin.png"
                  alt="hero"
                  class="footer__icon"
                />
              </div>
              <div class="footer__icons">
                <NuxtImg
                  src="/images/meta.png"
                  alt="hero"
                  class="footer__icon"
                />
              </div>
            </div>
          </div>
          <div class="footer__mobile">
            <DynaText
              tag="p"
              color="chromo-green-100"
              size="base"
              weight="normal"
              class="leading-4"
            >
              Mobile app
            </DynaText>
            <div class="flex flex-row gap-x-3">
              <div class="footer__icons">
                <NuxtImg
                  src="/images/twitter.png"
                  alt="hero"
                  class="footer__icon"
                />
              </div>
              <div class="footer__icons">
                <NuxtImg
                  src="/images/youtube.png"
                  alt="hero"
                  class="footer__icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- --- -->
      <div class="footer__links">
        <div class="footer__menu">
          <DynaText tag="p" color="chromo-green-100" size="lg" weight="bold">
            Solutions
          </DynaText>
          <DynaMenu variant="footer" class="cursor-pointer">
            <DynaText
              v-for="(item, index) in footerLinks"
              :key="index"
              tag="li"
              color="chromo-green-100"
              size="base"
              weight="normal"
            >
              <NuxtLink :to="item.link">{{ item.text }}</NuxtLink>
            </DynaText>
          </DynaMenu>
        </div>
        <div class="footer__menu">
          <DynaText tag="p" color="chromo-green-100" size="lg" weight="bold">
            jobs by expertise
          </DynaText>
          <DynaMenu variant="footer" class="cursor-pointer">
            <DynaText
              v-for="(item, index) in footerLinks"
              :key="index"
              tag="li"
              color="chromo-green-100"
              size="base"
              weight="normal"
            >
              <NuxtLink :to="item.link">{{ item.text }}</NuxtLink>
            </DynaText>
          </DynaMenu>
        </div>
        <div class="footer__menu">
          <DynaText tag="p" color="chromo-green-100" size="lg" weight="bold">
            Features
          </DynaText>
          <DynaMenu variant="footer" class="cursor-pointer">
            <DynaText
              v-for="(item, index) in footerLinkss"
              :key="index"
              tag="li"
              color="chromo-green-100"
              size="base"
              weight="normal"
            >
              <NuxtLink :to="item.link">{{ item.text }}</NuxtLink>
            </DynaText>
          </DynaMenu>
        </div>
      </div>
      <!-- --- -->
      <div class="footer__socials1">
        <div class="footer__follow1">
          <DynaText
            tag="p"
            color="chromo-green-100"
            size="base"
            weight="normal"
            class="leading-4"
          >
            Follow us
          </DynaText>
          <div class="flex flex-row gap-x-3">
            <div class="footer__icons">
              <NuxtImg
                src="/images/twitter.png"
                alt="hero"
                class="footer__icon"
              />
            </div>
            <div class="footer__icons">
              <NuxtImg
                src="/images/youtube.png"
                alt="hero"
                class="footer__icon"
              />
            </div>
            <div class="footer__icons">
              <NuxtImg
                src="/images/insta.png"
                alt="hero"
                class="footer__icon"
              />
            </div>
            <div class="footer__icons">
              <NuxtImg
                src="/images/linkedin.png"
                alt="hero"
                class="footer__icon"
              />
            </div>
            <div class="footer__icons">
              <NuxtImg src="/images/meta.png" alt="hero" class="footer__icon" />
            </div>
          </div>
        </div>
        <div class="footer__mobile1">
          <DynaText
            tag="p"
            color="chromo-green-100"
            size="base"
            weight="normal"
            class="leading-4"
          >
            Mobile app
          </DynaText>
          <div class="flex flex-row gap-x-3">
            <div class="footer__icons">
              <NuxtImg
                src="/images/twitter.png"
                alt="hero"
                class="footer__icon"
              />
            </div>
            <div class="footer__icons">
              <NuxtImg
                src="/images/youtube.png"
                alt="hero"
                class="footer__icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const footerLinks = [
  { text: "About us", link: "/" },
  { text: "Pricing", link: "" },
  { text: "Dynamo Careers", link: "" },
  { text: "Remote Junior Jobs", link: "" },
  { text: "Remote Jobs", link: "" },
  { text: "Career Success Stories", link: "" },
  { text: "Talent Career Blog", link: "" },
];
const footerLinkss = [
  { text: "Remote AWS Developer Jobs", link: "/" },
  { text: "Remote Java Developer Jobs", link: "" },
  { text: "Remote Javascript Developer", link: "" },
  { text: "Jobs", link: "" },
  { text: "Remote Python Developer Jobs", link: "" },
  { text: "Remote React Developer Jobs", link: "" },
  { text: "Remote Shopify Developer Jobs", link: "" },
];
</script>

<style scoped>
.footer {
  @apply bg-academic-blue-900 py-[80px];
}
.container {
  @apply max-w-[1216px] mx-auto px-6 flex min-[1180px]:flex-row flex-col gap-14 min-[1180px]:gap-x-[90px];
}
.footer__branding {
  @apply max-w-[300px] flex flex-col gap-7;
}
.footer__links {
  @apply grid grid-cols-1 gap-7 min-[800px]:grid-cols-3;
}

.footer__socials {
  @apply min-[1180px]:flex min-[1180px]:flex-col hidden gap-8;
}

.footer__follow {
  @apply flex flex-col gap-3 cursor-pointer;
}
.footer__mobile {
  @apply flex flex-col gap-3 cursor-pointer;
}
.footer__socials1 {
  @apply flex flex-col gap-8 min-[1180px]:hidden;
}

.footer__follow1 {
  @apply flex flex-col gap-3 cursor-pointer;
}
.footer__mobile1 {
  @apply flex flex-col gap-3 cursor-pointer;
}
.footer__menu {
  @apply max-w-[600px]  flex flex-col gap-6;
}
</style>
