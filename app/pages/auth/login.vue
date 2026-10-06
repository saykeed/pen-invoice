<script setup lang="ts">
import { Eye, EyeOff } from '@lucide/vue'
import GoogleIcon from '~/assets/icons/google.svg'
import GithubIcon from '~/assets/icons/github.svg'

definePageMeta({ layout: 'auth' })

useHead({ title: 'Log in · Invoice Gen' })

const email = ref('')
const password = ref('')
const showPassword = ref(false)

const canSubmit = computed(() => email.value?.trim()?.length > 0 && password.value?.length > 0)
</script>

<template>
  <div class="relative flex min-h-screen flex-col">
    <main class="relative z-10 flex flex-1 items-center justify-center px-5 py-24">
      <div class="flex w-full max-w-105 flex-col items-center gap-6">
        <span>logo here</span>

        <div class="flex flex-col items-center gap-2 text-center">
          <h1 class="text-[1.65rem] font-medium tracking-[-0.02em] text-white">
            Log in
          </h1>
          <p class="text-sm text-[#9a9a9a]">
            New here?
            <NuxtLink to="/auth/signup" class="auth_link">Create an account</NuxtLink>
          </p>
        </div>

        <div class="flex w-full flex-col gap-3 sm:flex-row">
          <button type="button" class="auth_btn">
            <GoogleIcon class="h-4 w-4" aria-hidden="true" />
            Continue with Google
          </button>
          <button type="button" class="auth_btn">
            <GithubIcon class="h-4 w-4 fill-white" aria-hidden="true" />
            Continue with GitHub
          </button>
        </div>

        <div class="flex w-full items-center gap-4">
          <span class="h-px flex-1 bg-white/10" />
          <span class="text-xs text-[#7a7a7a]">or</span>
          <span class="h-px flex-1 bg-white/10" />
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

          <div class="field">
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
              <label for="password" class="field-label">Password</label>
              <NuxtLink to="/auth/forgot-password" class="auth_link ml-auto text-sm">
                Forgot password?
              </NuxtLink>
            </div>
            <div class="field-input-group">
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                placeholder="Your password"
                class="field-input-control"
              >
              <button
                type="button"
                class="shrink-0 text-[#8a8a8a] transition-colors hover:text-white"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
                @click="showPassword = !showPassword"
              >
                <EyeOff v-if="showPassword" :size="16" :stroke-width="1.75" />
                <Eye v-else :size="16" :stroke-width="1.75" />
              </button>
            </div>
          </div>

          <button
            type="submit"
            class="inline-flex h-11 w-full items-center justify-center rounded-full text-sm transition-colors"
            :class="canSubmit ? 'bg-[#ededed] text-black hover:bg-white' : 'cursor-not-allowed bg-[#1c1c1c] text-[#6f6f6f]'"
            :disabled="!canSubmit"
          >
            Log in
          </button>
        </form>
      </div>
    </main>
  </div>
</template>
