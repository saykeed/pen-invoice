<script setup lang="ts">
import { ChevronDown, TrendingUp, Users } from '@lucide/vue'

const clientStats = [
  { label: 'Open', value: '4' },
  { label: 'Paid', value: '12' },
  { label: 'Overdue', value: '1' },
  { label: 'This month', value: '$8.2k' },
]

const collected = [
  { label: 'Paid', value: '18,420', tone: 'bg-emerald-400' },
  { label: 'Still open', value: '2,960', tone: 'bg-white/35' },
]
</script>

<template>
  <section id="customers" class="mx-auto flex w-full flex-col gap-10 px-5 pt-4 pb-24 lg:max-w-280 lg:px-8 xl:max-w-300">
    <div class="flex max-w-xl flex-col gap-4">
      <h2 class="text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl">
        After the invoice is sent
      </h2>
      <p class="text-[15px] leading-relaxed text-[#9a9a9a] sm:text-base">
        Keep clients in one list, and see what is paid, what is open, and what is late
        without opening a spreadsheet.
      </p>
    </div>

    <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
      <article class="flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#0c0c0c] p-4 sm:p-5">
        <div class="flex flex-col gap-4 rounded-xl border border-white/10 bg-black/40 p-4">
          <div class="flex items-center gap-3">
            <span class="flex size-11 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
              <Users :size="18" :stroke-width="1.75" />
            </span>
            <div class="flex min-w-0 flex-col">
              <span class="text-[11px] text-white/45">Client</span>
              <span class="truncate text-base text-white">North Studio</span>
            </div>
            <ChevronDown :size="16" :stroke-width="1.75" class="ml-auto shrink-0 text-white/50" />
          </div>

          <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div v-for="stat in clientStats" :key="stat?.label" class="flex flex-col gap-1">
              <span class="text-[10px] tracking-[0.12em] text-white/40 uppercase">{{ stat?.label }}</span>
              <span class="text-sm text-white">{{ stat?.value }}</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3 px-1 pb-1">
          <Users :size="18" :stroke-width="1.75" class="text-white" />
          <h3 class="text-[15px] font-medium text-white">Clients, not a contact sheet</h3>
          <p class="text-sm leading-relaxed text-[#8d8d8d]">
            Each client keeps their invoices, totals, and what is still unpaid, so you are not hunting through old files.
          </p>
          <NuxtLink to="#docs" class="text-sm text-white transition-colors hover:text-white/70">
            Learn more
          </NuxtLink>
        </div>
      </article>

      <article class="flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#0c0c0c] p-4 sm:p-5">
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-[1.35fr_0.75fr]">
          <div class="relative flex flex-col gap-4 overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4">
            <div class="pointer-events-none absolute top-0 right-0 h-28 w-28 bg-[radial-gradient(circle,rgba(52,211,153,0.45),transparent_68%)]" />
            <div class="relative flex flex-col gap-1">
              <span class="text-[10px] tracking-[0.14em] text-white/45 uppercase">Collected</span>
              <span class="text-4xl font-medium tracking-tight text-white">86%</span>
            </div>
            <div class="relative flex flex-col gap-2">
              <div v-for="row in collected" :key="row?.label" class="flex items-center justify-between gap-3">
                <span class="flex items-center gap-2 text-sm text-white/70">
                  <span class="size-1.5 rounded-full" :class="row?.tone" />
                  {{ row?.label }}
                </span>
                <span class="text-sm text-white/80">{{ row?.value }}</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3 rounded-xl border border-white/10 bg-black/40 p-4">
            <span class="text-[10px] tracking-[0.14em] text-white/45 uppercase">On time</span>
            <span class="text-4xl font-medium tracking-tight text-white">92%</span>
            <span class="flex items-center gap-2 text-sm text-white/70">
              <span class="size-1.5 rounded-full bg-white/35" />
              Late · 2
            </span>
          </div>
        </div>

        <div class="flex flex-col gap-3 px-1 pb-1">
          <TrendingUp :size="18" :stroke-width="1.75" class="text-white" />
          <h3 class="text-[15px] font-medium text-white">A clear picture of what is paid</h3>
          <p class="text-sm leading-relaxed text-[#8d8d8d]">
            See how much has come in, what is still open, and which invoices slipped past their due date.
          </p>
          <NuxtLink to="#docs" class="text-sm text-white transition-colors hover:text-white/70">
            Learn more
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>
