import { createClient, type SupabaseClient } from '@supabase/supabase-js'

export function useSupabase(): SupabaseClient | null {
  const config = useRuntimeConfig()
  const url = config.public?.supabaseUrl
  const key = config.public?.supabasePublishableKey

  if (!url || !key) {
    return null
  }

  return createClient(url, key)
}
