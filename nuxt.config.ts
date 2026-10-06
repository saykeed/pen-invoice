import { readFileSync } from 'node:fs'
import { compileTemplate } from '@vue/compiler-sfc'
import tailwindcss from '@tailwindcss/vite'

function svgComponentPlugin() {
  return {
    name: 'svg-component',
    enforce: 'pre' as const,
    load(id: string) {
      const file = id.split('?')[0]
      if (!file?.endsWith('.svg')) return

      const source = readFileSync(file, 'utf8')
      const { code } = compileTemplate({
        id: file,
        filename: file,
        source,
        transformAssetUrls: false,
      })

      return `${code}\nexport default { render }`
    },
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Invoice Gen',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,600&display=swap',
        },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss(), svgComponentPlugin()],
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabasePublishableKey: process.env.SUPABASE_PUBLISHABLE_KEY,
    },
  },
})
