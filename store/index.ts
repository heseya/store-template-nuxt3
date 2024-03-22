import { defineStore } from 'pinia'
import type { ProductList } from '@heseya/store-core'

export const useStore = defineStore('main', {
  state: () => ({
    products: [] as ProductList[],
  }),

  actions: {
    fetchProducts() {
      const heseya = useHeseya()
      return heseya.Products.get()
    },
  },
})
