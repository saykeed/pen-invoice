<script setup lang="ts">
import { ChevronDown, Ellipsis, Search } from '@lucide/vue'
import { invoices, formatAmount, formatAge } from '~/data/invoices'

definePageMeta({ layout: 'dashboard' })

useHead({ title: 'Invoices · Invoice Gen' })

const query = ref('')
const view = ref<'all' | 'unpaid' | 'paid'>('all')
const range = ref('15')

const views = [
  { id: 'all', label: 'All' },
  { id: 'unpaid', label: 'Unpaid' },
  { id: 'paid', label: 'Paid' },
] as const

const ranges = [
  { value: '15', label: 'Last 15 days' },
  { value: '30', label: 'Last 30 days' },
  { value: 'all', label: 'All time' },
]

const visible = computed(() => {
  const needle = query.value?.trim()?.toLowerCase() ?? ''
  const limit = range.value === 'all' ? null : Number(range.value)

  return invoices?.filter((item) => {
    const haystack = `${item?.client ?? ''} ${item?.number ?? ''} ${item?.title ?? ''}`.toLowerCase()
    const matchesQuery = !needle || haystack.includes(needle)
    const matchesRange = limit === null || (item?.daysAgo ?? 0) <= limit
    const status = item?.status
    const matchesView = view.value === 'all'
      || (view.value === 'paid' && status === 'paid')
      || (view.value === 'unpaid' && (status === 'sent' || status === 'overdue'))

    return matchesQuery && matchesRange && matchesView
  }) ?? []
})

const columns = 'minmax(0,1.6fr) 6.5rem minmax(0,1.3fr) 6rem 4.5rem 2rem'
</script>

<template>
  <div class="flex flex-col px-4 md:px-8">
    <div class="flex flex-col gap-2 py-6 md:py-8">
      <h1 class="text-2xl font-medium tracking-[-0.02em] text-white">Invoices</h1>
      <p class="text-sm text-[#8a8a8a]">Everything you've sent, and what's still open.</p>
    </div>

    <div class="sticky top-0 z-10 flex flex-col gap-3 bg-black py-3">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-1">
          <button
            v-for="item in views"
            :key="item?.id"
            type="button"
            class="rounded-lg px-3 py-1.5 text-sm transition-colors"
            :class="view === item?.id ? 'bg-[#1c1c1c] text-white' : 'text-[#8a8a8a] hover:text-white'"
            @click="view = item?.id ?? 'all'"
          >
            {{ item?.label }}
          </button>
        </div>

        <button
          type="button"
          class="inline-flex h-9 items-center justify-center rounded-lg bg-[#ededed] px-3 text-sm text-black transition-colors hover:bg-white"
        >
          New invoice
        </button>
      </div>

      <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label class="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/10 bg-[#141414] px-3">
          <Search :size="14" :stroke-width="1.75" class="shrink-0 text-[#8a8a8a]" />
          <input
            v-model="query"
            type="search"
            placeholder="Search clients or invoices"
            class="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-[#6a6a6a]"
          >
        </label>

        <label class="relative flex h-9 items-center">
          <select
            v-model="range"
            class="h-9 appearance-none rounded-lg border border-white/10 bg-[#141414] pr-8 pl-3 text-sm text-white outline-none"
          >
            <option v-for="item in ranges" :key="item?.value" :value="item?.value" class="bg-black">
              {{ item?.label }}
            </option>
          </select>
          <ChevronDown :size="14" :stroke-width="1.75" class="pointer-events-none absolute right-2.5 text-[#8a8a8a]" />
        </label>
      </div>

      <div
        class="hidden items-center gap-3 rounded-lg bg-white/[0.04] px-3 py-2 text-xs text-[#8a8a8a] md:grid"
        :style="{ gridTemplateColumns: columns }"
      >
        <span>Client</span>
        <span>Status</span>
        <span>Invoice</span>
        <span>Amount</span>
        <span>Sent</span>
        <span class="sr-only">Actions</span>
      </div>
    </div>

    <div v-if="!visible?.length" class="py-16 text-center text-sm text-[#8a8a8a]">
      No invoices match.
    </div>

    <div v-else class="flex flex-col pb-8">
      <article
        v-for="invoice in visible"
        :key="invoice?.id"
        class="border-b border-white/10"
      >
        <div class="flex flex-col gap-2 py-3 md:hidden">
          <div class="flex items-center justify-between gap-3">
            <span class="truncate text-sm text-white">{{ invoice?.client }}</span>
            <DashboardInvoiceStatus :status="invoice?.status" />
          </div>
          <div class="flex items-center justify-between gap-3">
            <span class="min-w-0 truncate text-sm text-[#c8c8c8]">{{ invoice?.number }} · {{ invoice?.title }}</span>
            <span class="shrink-0 text-sm text-white">{{ formatAmount(invoice?.amount) }}</span>
          </div>
          <span class="text-xs text-[#8a8a8a]">{{ formatAge(invoice?.daysAgo) }}</span>
        </div>

        <div
          class="hidden items-center gap-3 py-3 md:grid md:px-3"
          :style="{ gridTemplateColumns: columns }"
        >
          <span class="truncate text-sm text-white">{{ invoice?.client }}</span>
          <DashboardInvoiceStatus :status="invoice?.status" />
          <span class="truncate text-sm text-[#c8c8c8]">{{ invoice?.title }}</span>
          <span class="text-sm text-[#d4d4d4]">{{ formatAmount(invoice?.amount) }}</span>
          <span class="text-sm text-[#8a8a8a]">{{ formatAge(invoice?.daysAgo) }}</span>
          <button
            type="button"
            class="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#8a8a8a] transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Invoice actions"
          >
            <Ellipsis :size="16" :stroke-width="1.75" />
          </button>
        </div>
      </article>
    </div>
  </div>
</template>
