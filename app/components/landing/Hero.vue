<script setup lang="ts">
import { ChevronRight } from '@lucide/vue'
</script>

<template>
  <section class="relative w-full min-h-screen overflow-hidden px-5 pt-[calc(4rem+1.5rem)] pb-6 md:px-8 lg:pt-[calc(4rem+5rem)] lg:pb-20">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_42%,rgba(255,255,255,0.07),transparent_52%)]"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute top-[-22%] right-[-6%] hidden h-[78%] w-[46%] origin-top-right rotate-22 bg-[linear-gradient(90deg,transparent_0%,rgba(255,236,210,0.045)_36%,rgba(255,248,235,0.12)_50%,rgba(255,236,210,0.045)_64%,transparent_100%)] blur-3xl lg:block"
    />

    <div
      class="relative grid min-w-0 grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-10 md:mt-20 lg:mt-25 w-full lg:max-w-280 xl:max-w-300 mx-auto"
    >
      <div class="flex w-full flex-col items-center gap-6 text-center md:items-start md:gap-7 md:text-left">
        <NuxtLink
          to="#product"
          class="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[13px] text-[#d6d6d6] transition-colors hover:border-white/30 hover:text-white"
        >
          Ready in under 2 minutes
          <ChevronRight :size="14" :stroke-width="1.75" />
        </NuxtLink>

        <h1 class="max-w-full font-display text-[3.15rem] font-semibold leading-[0.95] tracking-[-0.02em] text-[#f3f3f3] sm:text-7xl lg:text-[5.4rem]">
          Invoices for<br>businesses
        </h1>

        <p class="max-w-[40ch] text-[15px] leading-relaxed text-pretty text-[#a3a3a3] sm:text-base">
          The fastest way to bill a client without the spreadsheet.
          Create a professional invoice in under two minutes.
        </p>

        <div class="flex w-full flex-col items-center gap-5 md:w-auto md:flex-row md:gap-6">
          <NuxtLink
            to="/auth/signup"
            class="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-[#2c2c2c] px-4 text-sm text-white transition-colors hover:bg-[#383838] md:h-10 md:w-auto md:rounded-lg"
          >
            Get started
          </NuxtLink>
          <NuxtLink to="#docs" class="text-sm text-[#cfcfcf] transition-colors hover:text-white">
            Documentation
          </NuxtLink>
        </div>
      </div>

      <div class="order-first w-full md:order-none">
        <LandingHeroVisualV2 />
      </div>
    </div>
  </section>
</template>
