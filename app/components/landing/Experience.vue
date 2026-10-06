<script setup lang="ts">
import { Check, Eye, PenLine } from '@lucide/vue'

const activity = [
  { label: 'Sent', detail: 'to studio@north.co', time: 'Oct 06, 9:14' },
  { label: 'Viewed', detail: 'opened on iPhone', time: 'Oct 06, 9:41' },
  { label: 'Paid', detail: 'marked paid · $2,480', time: 'Oct 08, 11:02' },
]
</script>

<template>
  <section id="product" class="mx-auto flex w-full flex-col gap-10 px-5 py-20 lg:max-w-280 lg:px-8 xl:max-w-300">
    <div class="flex max-w-xl flex-col gap-4">
      <h2 class="text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl">
        From blank page<br>to sent invoice
      </h2>
      <p class="text-[15px] leading-relaxed text-[#9a9a9a] sm:text-base">
        Write a line, watch the total, and send something that already looks finished.
        No spreadsheet, and no second tool for the PDF.
      </p>
    </div>

    <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
      <article class="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c]">
        <div class="relative flex h-72 flex-col gap-4 p-6">
          <div class="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/40 px-3 py-2">
            <span class="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[11px] text-emerald-300">Draft</span>
            <span class="text-[12px] text-white/70">INV-0142</span>
            <span class="ml-auto rounded-md border border-white/10 px-2 py-1 text-[11px] text-white/80">Preview</span>
          </div>
          <div class="flex flex-col gap-2 font-mono text-[12px] leading-relaxed text-white/55">
            <span>Design sprint · 3 days · $2,400</span>
            <span>Brand marks · 1 set · $800</span>
            <span>Revisions · included · $0</span>
            <span class="text-white/35">Tax · 0% · $0</span>
            <span class="text-white/25">Notes · due in 14 days</span>
          </div>
          <div class="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,#0c0c0c,transparent)]" />
        </div>

        <div class="flex flex-col gap-3 px-6 pb-6">
          <PenLine :size="18" :stroke-width="1.75" class="text-white" />
          <h3 class="text-[15px] font-medium text-white">Watch the total update</h3>
          <p class="text-sm leading-relaxed text-[#8d8d8d]">
            Every line item changes the invoice as you type, so you can see the finished page before you send it.
          </p>
          <NuxtLink to="#docs" class="text-sm text-white transition-colors hover:text-white/70">
            Learn more
          </NuxtLink>
        </div>
      </article>

      <article class="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c]">
        <div class="relative flex h-72 flex-col gap-5 p-6">
          <div v-for="item in activity" :key="item?.label" class="flex items-start gap-3">
            <span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
              <Check :size="12" :stroke-width="2.25" />
            </span>
            <div class="flex min-w-0 flex-col gap-1">
              <div class="flex flex-wrap items-center gap-2">
                <span class="rounded-full bg-emerald-500 px-2 py-0.5 text-[11px] font-medium text-black">
                  {{ item?.label }}
                </span>
                <span class="text-[12px] text-white/40">{{ item?.time }}</span>
              </div>
              <p class="text-sm text-white/70">{{ item?.detail }}</p>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(to_top,#0c0c0c,transparent)]" />
        </div>

        <div class="flex flex-col gap-3 px-6 pb-6">
          <Eye :size="18" :stroke-width="1.75" class="text-white" />
          <h3 class="text-[15px] font-medium text-white">See what happens next</h3>
          <p class="text-sm leading-relaxed text-[#8d8d8d]">
            Sent, viewed, and paid stay on the invoice, so you are not guessing whether the client opened it.
          </p>
          <NuxtLink to="#docs" class="text-sm text-white transition-colors hover:text-white/70">
            Learn more
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>
