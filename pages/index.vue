<template>
  <div class="index-page">
    <div>
      <h1 class="index-page__title">{{ t('home.title') }}</h1>
      <br />
      <br />
      <div v-for="product in products?.data || []" :key="product.id">
        <b>{{ product.name }}</b> -
        <span>już od {{ formatAmount(parsePrices(product.prices_min, config.currency)) }}</span>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "pl": {
    "home": {
      "title": "heseya-store-template"
    }
  }
}
</i18n>

<script setup lang="ts">
import { parsePrices } from '@heseya/store-core'
import { useStore } from '~/store'
import { useConfigStore } from '~/store/config';

const { t } = useI18n({
  useScope: 'local',
})
const store = useStore()

const config = useConfigStore()

const { data: products } = useAsyncData('products', () => {
  return store.fetchProducts()
})
</script>

<style lang="scss" scoped>
.index-page {
  margin: 200px auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__title {
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: $primaryColor;
    letter-spacing: 1px;
  }
}
</style>
