<script setup lang="ts">
useHead({
  bodyAttrs: { class: 'bg-black' },
})
</script>

<template>
  <div class="relative min-h-screen w-full overflow-hidden bg-black font-[Inter,ui-sans-serif,system-ui,sans-serif] text-[#ededed] antialiased">
    <img
      src="/auth-bg.jpg"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 h-full w-full object-cover"
    >
    <slot />
  </div>
</template>
