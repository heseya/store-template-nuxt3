import type { SeoMetadata, SettingsRecord } from '@heseya/store-core'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  state: () => ({
    currency: 'PLN',
    env: {} as SettingsRecord,
    seo: {} as SeoMetadata,
  }),

  actions: {
    async fetchConfig() {
      try {
        const heseya = useHeseya()
        this.env = await heseya.Settings.get({ array: true })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('[CONFIG] Failed to fetch', error)
      }
    },
    async fetchSeo() {
      try {
        const heseya = useHeseya()
        this.seo = await heseya.GlobalSeo.get()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('[SEO] Failed to fetch', error)
      }
    },
  },
})
