export const useAppStore = defineStore('app', () => {
  const name = ref('Invoice Gen')

  return { name }
})
