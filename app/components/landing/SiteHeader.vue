<script setup lang="ts">
import { ChevronDown, Menu, X } from '@lucide/vue'

const links = [
  { label: 'Product', to: '#product' },
  { label: 'Templates', to: '#templates' },
  { label: 'Customers', to: '#customers' },
  { label: 'Docs', to: '#docs' },
  { label: 'Pricing', to: '#pricing' },
]

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-black">
    <div class="mx-auto flex h-16 w-full min-w-0 max-w-[1200px] items-center justify-between gap-4 px-5 lg:gap-6 lg:px-8">
      <NuxtLink to="/" class="shrink-0 text-[15px] font-medium tracking-tight text-white" @click="closeMenu">
        Invoice Gen
      </NuxtLink>

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Primary">
        <NuxtLink
          v-for="link in links"
          :key="link?.label"
          :to="link?.to"
          class="inline-flex items-center gap-1 text-[13.5px] text-[#c8c8c8] transition-colors hover:text-white"
        >
          {{ link?.label }}
          <ChevronDown :size="14" :stroke-width="1.75" class="text-[#8a8a8a]" />
        </NuxtLink>
      </nav>

      <div class="flex shrink-0 items-center gap-3">
        <NuxtLink to="#login" class="hidden text-[13.5px] text-[#d4d4d4] transition-colors hover:text-white sm:inline">
          Log in
        </NuxtLink>
        <NuxtLink
          to="#get-started"
          class="inline-flex h-8 items-center rounded-full bg-[#ececec] px-3.5 text-[13px] font-medium text-black transition-colors hover:bg-white"
        >
          Get started
        </NuxtLink>
        <button
          type="button"
          class="inline-flex h-8 w-8 items-center justify-center text-white lg:hidden"
          :aria-expanded="menuOpen"
          aria-label="Menu"
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" :size="18" :stroke-width="1.75" />
          <Menu v-else :size="18" :stroke-width="1.75" />
        </button>
      </div>
    </div>

    <nav
      v-if="menuOpen"
      class="flex flex-col gap-1 border-t border-white/10 px-5 py-3 lg:hidden"
      aria-label="Mobile"
    >
      <NuxtLink
        v-for="link in links"
        :key="link?.label"
        :to="link?.to"
        class="flex items-center justify-between py-2.5 text-sm text-[#d4d4d4]"
        @click="closeMenu"
      >
        {{ link?.label }}
        <ChevronDown :size="14" :stroke-width="1.75" class="text-[#8a8a8a]" />
      </NuxtLink>
      <NuxtLink to="#login" class="py-2.5 text-sm text-[#d4d4d4] sm:hidden" @click="closeMenu">
        Log in
      </NuxtLink>
    </nav>
  </header>
</template>
