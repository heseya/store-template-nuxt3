import type { CookieOptions } from 'nuxt/app'

const COOKIES_OPTS: CookieOptions = {
  path: '/',
  maxAge: 60 * 60 * 24 * 31, // 31 days
  secure: true,
} as const

/**
 * Hack to make useCookie properly reactive
 * https://github.com/nuxt/nuxt/issues/13020
 * Solution based on https://github.com/nuxt/nuxt/issues/13020#issuecomment-1397282738
 */
export const useStatefulCookie = <T = string | null>(
  name: string,
  opts: CookieOptions<T> = COOKIES_OPTS,
) => {
  const key = `cookies:${name}`
  // @ts-ignore
  const cookie = useCookie<T>(name, opts)
  const state = useState(key, () => cookie.value)

  if (process.client)
    window.addEventListener('storage', (event) => {
      if (event.key === key) state.value = JSON.parse(event.newValue || '')
    })

  watch(
    state,
    () => {
      cookie.value = state.value
      if (process.client) localStorage.setItem(key, JSON.stringify(state.value))
    },
    { deep: true },
  )

  return state
}
