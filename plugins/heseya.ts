import { createHeseyaApiService } from '@heseya/store-core'
import type { AxiosInstance } from 'axios'

export default defineNuxtPlugin((nuxt) => {
  // eslint-disable-next-line no-console
  if (!nuxt.$axios) console.error('nuxt.$axios is undefined')

  const sdk = createHeseyaApiService(nuxt.$axios as AxiosInstance)

  return {
    provide: {
      heseya: sdk,
    },
  }
})
