import { createHeseyaApiService } from '@heseya/store-core'

export default defineNuxtPlugin((nuxt) => {
  const sdk = createHeseyaApiService(nuxt.$axios)

  return {
    provide: {
      heseya: sdk,
    },
  }
})
