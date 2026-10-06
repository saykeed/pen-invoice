<script setup lang="ts">
useHead({
  bodyAttrs: { class: 'bg-black' },
})
</script>

<template>
  <div class="min-h-screen w-full max-w-full bg-black font-[Inter,ui-sans-serif,system-ui,sans-serif] text-[#ededed] antialiased">
    <LandingSiteHeader />
    <div class="overflow-x-clip">
      <slot />
    </div>
  </div>
</template>
