<script setup lang="ts">
import { invoices, formatAmount } from '~/data/invoices'

definePageMeta({ layout: 'dashboard' })

useHead({ title: 'Home · Invoice Gen' })

const recent = computed(() => invoices?.slice(0, 5) ?? [])

const outstanding = computed(() =>
  invoices
    ?.filter(item => item?.status === 'sent' || item?.status === 'overdue')
    ?.reduce((sum, item) => sum + (item?.amount ?? 0), 0) ?? 0,
)

const paid = computed(() =>
  invoices
    ?.filter(item => item?.status === 'paid')
    ?.reduce((sum, item) => sum + (item?.amount ?? 0), 0) ?? 0,
)

const drafts = computed(() => invoices?.filter(item => item?.status === 'draft')?.length ?? 0)

const stats = computed(() => [
  { label: 'Outstanding', value: formatAmount(outstanding.value) },
  { label: 'Paid', value: formatAmount(paid.value) },
  { label: 'Drafts', value: String(drafts.value) },
])
</script>

<template>
  <div class="flex flex-col gap-8 px-4 py-6 md:px-8 md:py-8">
    <div class="flex flex-col gap-2">
      <h1 class="text-2xl font-medium tracking-[-0.02em] text-white">Home</h1>
      <p class="text-sm text-[#8a8a8a]">A quick look at what clients still owe.</p>
    </div>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <div
        v-for="stat in stats"
        :key="stat?.label"
        class="flex flex-col gap-1 rounded-xl border border-white/10 px-4 py-4"
      >
        <span class="text-sm text-[#8a8a8a]">{{ stat?.label }}</span>
        <span class="text-2xl tracking-[-0.02em] text-white">{{ stat?.value }}</span>
      </div>
    </div>

    <section class="flex flex-col gap-3">
      <div class="flex items-center justify-between gap-3">
        <h2 class="text-sm text-white">Recent</h2>
        <NuxtLink to="/dashboard/invoices" class="text-sm text-[#a3a3a3] transition-colors hover:text-white">
          View all
        </NuxtLink>
      </div>

      <div class="flex flex-col">
        <NuxtLink
          v-for="invoice in recent"
          :key="invoice?.id"
          to="/dashboard/invoices"
          class="flex items-center justify-between gap-3 border-b border-white/10 py-3"
        >
          <span class="flex min-w-0 flex-col gap-1">
            <span class="truncate text-sm text-white">{{ invoice?.client }}</span>
            <span class="truncate text-xs text-[#8a8a8a]">{{ invoice?.number }} · {{ invoice?.title }}</span>
          </span>
          <span class="flex shrink-0 flex-col items-end gap-1">
            <span class="text-sm text-white">{{ formatAmount(invoice?.amount) }}</span>
            <DashboardInvoiceStatus :status="invoice?.status" />
          </span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
