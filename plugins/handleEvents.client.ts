import { HeseyaEvent } from '@heseya/store-core'

export default defineNuxtPlugin((_nuxt) => {
  const bus = useHeseyaEventBus()

  bus.on(HeseyaEvent.ViewProduct, (_product) => {})

  bus.on(HeseyaEvent.ViewProductList, (_data) => {})

  bus.on(HeseyaEvent.AddToCart, (_item) => {})

  bus.on(HeseyaEvent.RemoveFromCart, (_item) => {})

  bus.on(HeseyaEvent.AddShippingInfo, (_data) => {})

  bus.on(HeseyaEvent.InitiateCheckout, (_items) => {})

  bus.on(HeseyaEvent.Login, () => {})

  bus.on(HeseyaEvent.Register, () => {})

  bus.on(HeseyaEvent.Purchase, (_data) => {})

  bus.on(HeseyaEvent.ViewCart, (_items) => {})
})
