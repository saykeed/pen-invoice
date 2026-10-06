<script setup lang="ts">
useHead({
  htmlAttrs: { class: 'overflow-x-hidden' },
  bodyAttrs: { class: 'overflow-x-hidden bg-black' },
})
</script>

<template>
  <div class="min-h-screen w-full max-w-full overflow-x-hidden bg-black font-[Inter,ui-sans-serif,system-ui,sans-serif] text-[#ededed] antialiased">
    <LandingSiteHeader />
    <slot />
  </div>
</template>
