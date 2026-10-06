<script setup lang="ts">
useHead({
  bodyAttrs: { class: 'bg-black' },
})

const route = useRoute()
const menuOpen = ref(false)

const title = computed(() => route.path?.includes('/invoices') ? 'Invoices' : 'Home')

watch(() => route.path, () => {
  menuOpen.value = false
})
</script>

<template>
  <div class="flex h-dvh overflow-hidden bg-black font-[Inter,ui-sans-serif,system-ui,sans-serif] text-[#ededed] antialiased">
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-40 bg-black/70 lg:hidden"
      @click="menuOpen = false"
    />

    <DashboardAppSidebar class="hidden lg:flex" />

    <DashboardAppSidebar
      v-if="menuOpen"
      class="fixed inset-y-0 left-0 z-50 flex lg:hidden"
      @close="menuOpen = false"
    />

    <div class="flex min-h-0 min-w-0 flex-1 flex-col">
      <header class="flex h-14 shrink-0 items-center gap-3 border-b border-white/10 px-4 lg:hidden">
        <button
          type="button"
          class="inline-flex h-8 items-center rounded-lg border border-white/10 px-3 text-sm text-white"
          @click="menuOpen = true"
        >
          Menu
        </button>
        <span class="text-sm text-white">{{ title }}</span>
      </header>

      <main class="min-h-0 flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
