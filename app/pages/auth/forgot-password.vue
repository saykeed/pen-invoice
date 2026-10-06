<script setup lang="ts">
definePageMeta({ layout: 'auth' })

useHead({ title: 'Reset your password · Invoice Gen' })

const email = ref('')

const canSubmit = computed(() => email.value?.trim()?.length > 0)
</script>

<template>
  <div class="relative flex min-h-screen flex-col">
    <main class="relative z-10 flex flex-1 items-center justify-center px-5 py-24">
      <div class="flex w-full max-w-105 flex-col items-center gap-6">
        <span>logo here</span>

        <div class="flex w-full flex-col items-center gap-2 text-center">
          <h1 class="text-[1.65rem] font-medium tracking-[-0.02em] text-white">
            Reset your password
          </h1>
          <p class="w-full max-w-[36ch] text-center text-sm leading-relaxed text-[#9a9a9a]">
            Enter the email on your account and we'll send a reset link.
          </p>
        </div>

        <form class="flex w-full flex-col gap-4" @submit.prevent>
          <div class="field">
            <label for="email" class="field-label">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              autocomplete="email"
              placeholder="you@studio.com"
              class="field-input"
            >
          </div>

          <button
            type="submit"
            class="inline-flex h-11 w-full items-center justify-center rounded-full text-sm transition-colors"
            :class="canSubmit ? 'bg-[#ededed] text-black hover:bg-white' : 'cursor-not-allowed bg-[#1c1c1c] text-[#6f6f6f]'"
            :disabled="!canSubmit"
          >
            Send reset link
          </button>
        </form>

        <p class="text-sm text-[#9a9a9a]">
          Remembered it?
          <NuxtLink to="/auth/login" class="auth_link">Log in</NuxtLink>
        </p>
      </div>
    </main>
  </div>
</template>
