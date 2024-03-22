import axios from 'axios'
import { enhanceAxiosWithAuthTokenRefreshing } from '@heseya/store-core'
import type {Pinia} from 'pinia'

import { useChannelsStore } from '@/store/channels'
import { useLanguageStore } from '@/store/language'

export default defineNuxtPlugin((nuxt) => {
  const config = usePublicRuntimeConfig()
  const ax = axios.create({ baseURL: config.apiUrl })


  const languageStore = useLanguageStore(nuxt.$pinia as Pinia)
  const channelsStore = useChannelsStore(nuxt.$pinia as Pinia)

  enhanceAxiosWithAuthTokenRefreshing(ax, {
    heseyaUrl: config.apiUrl,
    // TODO: Get token from state
    getAccessToken: () => 'token',
    // TODO: Save token in state
    setAccessToken: (token) => console.log('setAccessToken', token),
    // TODO: Get token from state
    getRefreshToken: () => 'refresh',
    // TODO: Save token in state
    setRefreshToken: (token) => console.log('setRefreshToken', token),
    shouldIncludeAuthorizationHeader: () => false,
  })

  ax.interceptors.request.use((config) => {


    // @ts-ignore this $i18n exists, but it's not in the Nuxt types for some reason
    const apiLanguage = languageStore.getLanguageByIso(nuxt.$i18n.locale.value)
    if (apiLanguage && languageStore.languages.length > 0) {
      config.headers['Accept-Language'] = apiLanguage.iso
    } else if (!config.url?.includes('languages')) {
      // ignore languages endpoint
      // eslint-disable-next-line no-console
      console.warn('Current language not found in languages provided by api')
    }

    if (channelsStore.selected) config.headers['X-Sales-Channel'] = channelsStore.selected.id

    return config
  })

  return {
    provide: {
      axios: ax,
    },
  }
})
