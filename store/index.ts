import { ProductList } from '@heseya/store-core'
import { defineStore } from 'pinia'

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
