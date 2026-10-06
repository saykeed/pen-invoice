<script setup lang="ts">
import { statusLabel, type InvoiceStatus } from '~/data/invoices'

const props = defineProps<{ status?: InvoiceStatus }>()

const tone: Record<InvoiceStatus, string> = {
  paid: 'bg-emerald-400/10 text-emerald-300',
  sent: 'bg-white/10 text-[#d4d4d4]',
  overdue: 'bg-red-400/10 text-red-300',
  draft: 'bg-white/5 text-[#8a8a8a]',
}
</script>

<template>
  <span
    class="inline-flex w-fit rounded-full px-2 py-0.5 text-xs"
    :class="tone[props.status ?? 'draft']"
  >
    {{ statusLabel[props.status ?? 'draft'] }}
  </span>
</template>
