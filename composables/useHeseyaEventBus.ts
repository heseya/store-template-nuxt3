import { HeseyaEventBusService } from '@heseya/store-core'

export const useHeseyaEventBus = () => {
  const { $ev } = useNuxtApp()

  // eslint-disable-next-line no-console
  if (process.server) console.error('HeseyaEventBus is undefined on the server side!')

  return $ev as HeseyaEventBusService
}
