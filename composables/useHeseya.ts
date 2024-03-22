import { HeseyaApiService } from '@heseya/store-core'

export const useHeseya = () => {
  const { $heseya } = useNuxtApp()
  return $heseya as HeseyaApiService
}
