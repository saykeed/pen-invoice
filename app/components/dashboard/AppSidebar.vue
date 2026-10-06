<script setup lang="ts">
import { FileText, House } from '@lucide/vue'

const emit = defineEmits<{ close: [] }>()

const route = useRoute()

const items = [
  { label: 'Home', to: '/dashboard', icon: House },
  { label: 'Invoices', to: '/dashboard/invoices', icon: FileText },
]

const isActive = (to?: string) => {
  if (to === '/dashboard') return route.path === '/dashboard'
  return route.path?.startsWith(to ?? '')
}
</script>

<template>
  <aside class="h-dvh w-60 shrink-0 flex-col gap-4 border-r border-white/10 bg-black px-3 py-3">
    <button type="button" class="flex items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-white">
      <span class="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-[11px] font-medium">IG</span>
      <span class="min-w-0 flex-1 truncate">Studio</span>
    </button>

    <nav class="flex min-h-0 flex-1 flex-col gap-1" aria-label="Dashboard">
      <NuxtLink
        v-for="item in items"
        :key="item?.to"
        :to="item?.to"
        class="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors"
        :class="isActive(item?.to) ? 'bg-[#1c1c1c] text-white' : 'text-[#a3a3a3] hover:bg-white/5 hover:text-white'"
        @click="emit('close')"
      >
        <component :is="item?.icon" :size="16" :stroke-width="1.75" />
        {{ item?.label }}
      </NuxtLink>
    </nav>

    <div class="flex items-center gap-2 px-2 py-2">
      <span class="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs">S</span>
      <span class="min-w-0 flex-1 truncate text-sm text-[#c8c8c8]">Studio</span>
    </div>
  </aside>
</template>
