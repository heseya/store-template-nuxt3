/* eslint-disable no-console */
import type { Pinia } from 'pinia'

import { useConfigStore } from '@/store/config'
import { useChannelsStore } from '@/store/channels'
import { useLanguageStore } from '@/store/language'

import { SALES_CHANNEL_KEY } from '@/consts/cookiesKeys'

export default defineNuxtPlugin(async (nuxtApp) => {
  const runtimeConfig = usePublicRuntimeConfig()
  if (!runtimeConfig.apiUrl) console.error('NUXT_PUBLIC_API_URL env is not defined')
  if (!runtimeConfig.i18n.baseUrl) console.error('NUXT_PUBLIC_I18N_BASE_URL env is not defined')

  const config = useConfigStore(nuxtApp.$pinia as Pinia)
  const channels = useChannelsStore(nuxtApp.$pinia as Pinia)
  const languages = useLanguageStore(nuxtApp.$pinia as Pinia)

  // TODO: selected channel should probably be included in URL, not in the cookie
  const channelCookie = useCookie(SALES_CHANNEL_KEY)

  await languages.fetchApiLanguages()
  await Promise.all([config.fetchConfig(), channels.fetchChannels()])

  channels.setChannel(channelCookie.value || undefined)

  await Promise.all([config.fetchSeo()])
})
