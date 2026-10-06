<script setup lang="ts">
const sheets = [
  {
    key: 'back',
    number: '#0140',
    total: '$1,120',
    lines: [
      ['w-20', 'w-8'],
      ['w-16', 'w-10'],
      ['w-14', 'w-6'],
    ],
  },
  {
    key: 'mid',
    number: '#0141',
    total: '$860',
    lines: [
      ['w-24', 'w-10'],
      ['w-16', 'w-8'],
      ['w-20', 'w-12'],
    ],
  },
  {
    key: 'front',
    number: '#0142',
    total: '$2,480',
    lines: [
      ['w-24', 'w-10'],
      ['w-20', 'w-8'],
      ['w-16', 'w-12'],
    ],
  },
]
</script>

<template>
  <div class="hero-visual relative h-75 w-full self-center md:h-115" aria-hidden="true">
    <div class="hero-visual__shadow pointer-events-none absolute bottom-8 left-1/2 h-12 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-2xl" />

    <div class="absolute inset-0 flex items-center justify-center perspective-[1100px]">
      <div class="hero-visual__tilt relative h-82.5 w-60 origin-center">
        <div class="hero-visual__stack relative h-full w-full">
        <div
          v-for="sheet in sheets"
          :key="sheet?.key"
          class="hero-visual__sheet absolute inset-0 flex flex-col gap-5 overflow-hidden rounded-xl border p-5"
          :class="`hero-visual__sheet--${sheet?.key}`"
        >
          <div class="flex items-center justify-between gap-3">
            <span class="text-[11px] tracking-[0.2em] text-white/75">INVOICE</span>
            <span class="text-[11px] text-white/40">{{ sheet?.number }}</span>
          </div>

          <div class="h-px w-full bg-white/10" />

          <div class="flex flex-col gap-2">
            <div class="h-2 w-28 rounded-full bg-white/25" />
            <div class="h-2 w-16 rounded-full bg-white/10" />
          </div>

          <div class="flex flex-col gap-3">
            <div
              v-for="(line, index) in sheet?.lines"
              :key="`${sheet?.key}-${index}`"
              class="flex items-center justify-between gap-4"
            >
              <div class="h-2 rounded-full bg-white/20" :class="line?.[0]" />
              <div class="h-2 rounded-full bg-white/30" :class="line?.[1]" />
            </div>
          </div>

          <div class="mt-auto flex items-end justify-between gap-3 border-t border-white/10 pt-4">
            <span class="text-[11px] text-white/45">Total</span>
            <span class="font-display text-[28px] leading-none text-white">{{ sheet?.total }}</span>
          </div>

          <div v-if="sheet?.key === 'front'" class="hero-visual__sheen" />
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-visual__tilt {
  transform: rotateX(16deg) rotateY(-26deg) rotateZ(12deg) scale(0.62);
}

@media (min-width: 768px) {
  .hero-visual__tilt {
    transform: rotateX(16deg) rotateY(-26deg) rotateZ(12deg);
  }
}

.hero-visual__stack {
  animation: stack-float 9.5s ease-in-out infinite;
}

.hero-visual__sheet {
  border-color: rgb(255 255 255 / 0.12);
  background: #141414;
  box-shadow: 0 24px 50px rgb(0 0 0 / 0.45);
}

.hero-visual__sheet--back {
  z-index: 1;
  background: #101010;
  animation: fan-back 9.5s cubic-bezier(0.45, 0.05, 0.25, 1) infinite both;
}

.hero-visual__sheet--mid {
  z-index: 2;
  background: #181818;
  animation: fan-mid 9.5s cubic-bezier(0.45, 0.05, 0.25, 1) infinite both;
  animation-delay: 0.08s;
}

.hero-visual__sheet--front {
  z-index: 3;
  border-color: rgb(255 255 255 / 0.16);
  background: linear-gradient(155deg, #454545 0%, #1c1c1c 36%, #0a0a0a 100%);
  box-shadow:
    0 30px 70px rgb(0 0 0 / 0.55),
    inset 0 1px 0 rgb(255 255 255 / 0.35);
  animation: fan-front 9.5s cubic-bezier(0.45, 0.05, 0.25, 1) infinite both;
  animation-delay: 0.16s;
}

.hero-visual__sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, transparent 32%, rgb(255 255 255 / 0.14) 48%, transparent 64%);
  animation: sheen 9.5s ease-in-out infinite;
  animation-delay: 0.16s;
}

.hero-visual__shadow {
  animation: shadow-rest 9.5s ease-in-out infinite;
}

@keyframes stack-float {
  0%,
  16%,
  100% {
    transform: translateY(0);
  }

  46%,
  62% {
    transform: translateY(-14px);
  }
}

@keyframes fan-back {
  0%,
  16%,
  100% {
    transform: translate3d(20px, 20px, 0) rotate(0deg);
  }

  46%,
  62% {
    transform: translate3d(42px, 34px, 0) rotate(8deg);
  }
}

@keyframes fan-mid {
  0%,
  16%,
  100% {
    transform: translate3d(10px, 10px, 0) rotate(0deg);
  }

  46%,
  62% {
    transform: translate3d(20px, 14px, 0) rotate(4deg);
  }
}

@keyframes fan-front {
  0%,
  16%,
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  46%,
  62% {
    transform: translate3d(-8px, -18px, 0) rotate(-3.5deg);
  }
}

@keyframes sheen {
  0%,
  28% {
    transform: translateX(-130%);
  }

  58%,
  100% {
    transform: translateX(130%);
  }
}

@keyframes shadow-rest {
  0%,
  16%,
  100% {
    opacity: 0.85;
    transform: translateX(-50%) scale(1);
  }

  46%,
  62% {
    opacity: 0.35;
    transform: translateX(-50%) scale(0.82);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-visual__stack,
  .hero-visual__sheet--back,
  .hero-visual__sheet--mid,
  .hero-visual__sheet--front,
  .hero-visual__sheen,
  .hero-visual__shadow {
    animation: none;
  }
}
</style>
