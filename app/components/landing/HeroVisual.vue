<template>
  <div class="relative h-[360px] w-full  self-center overflow-hidden sm:h-[420px] lg:shrink-0 lg:overflow-visible border" aria-hidden="true">
    <div class="pointer-events-none absolute bottom-8 left-1/2 h-12 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-2xl" />

    <div class="absolute inset-0 flex items-center justify-center [perspective:1100px]">
      <div class="relative h-[280px] w-[210px] [transform:rotateX(16deg)_rotateY(-26deg)_rotateZ(12deg)] sm:h-[330px] sm:w-[240px]">
        <div class="absolute inset-0 translate-x-5 translate-y-5 rounded-xl border border-white/10 bg-[#121212]" />
        <div class="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-xl border border-white/10 bg-[#1a1a1a]" />

        <div
          class="relative flex h-full w-full flex-col gap-5 rounded-xl border border-white/15 bg-[linear-gradient(155deg,#454545_0%,#1c1c1c_36%,#0a0a0a_100%)] p-5 shadow-[0_30px_70px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]"
        >
          <div class="flex items-center justify-between gap-3">
            <span class="text-[11px] tracking-[0.2em] text-white/75">INVOICE</span>
            <span class="text-[11px] text-white/40">#0142</span>
          </div>

          <div class="h-px w-full bg-white/10" />

          <div class="flex flex-col gap-2">
            <div class="h-2 w-28 rounded-full bg-white/30" />
            <div class="h-2 w-16 rounded-full bg-white/10" />
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between gap-4">
              <div class="h-2 w-24 rounded-full bg-white/20" />
              <div class="h-2 w-10 rounded-full bg-white/35" />
            </div>
            <div class="flex items-center justify-between gap-4">
              <div class="h-2 w-20 rounded-full bg-white/15" />
              <div class="h-2 w-8 rounded-full bg-white/25" />
            </div>
            <div class="flex items-center justify-between gap-4">
              <div class="h-2 w-16 rounded-full bg-white/10" />
              <div class="h-2 w-12 rounded-full bg-white/20" />
            </div>
          </div>

          <div class="mt-auto flex items-end justify-between gap-3 border-t border-white/10 pt-4">
            <span class="text-[11px] text-white/45">Total</span>
            <span class="font-display text-[28px] leading-none text-white">$2,480</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
