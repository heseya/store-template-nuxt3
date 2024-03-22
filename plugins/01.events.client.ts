import { createHeseyaEventBusService } from '@heseya/store-core'

export default defineNuxtPlugin(() => {
  const bus = createHeseyaEventBusService()

  return {
    provide: {
      ev: bus,
    },
  }
})
