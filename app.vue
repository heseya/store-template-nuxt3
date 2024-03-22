<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = usePublicRuntimeConfig()

const i18nHead = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

const isProduction = computed(() => ['true', '1', 1, true].includes(runtimeConfig.production))

useHead({
  link: [
    { rel: 'preconnect', href: runtimeConfig.apiUrl },
    { rel: 'dns-prefetch', href: runtimeConfig.apiUrl },
    { rel: 'preconnect', href: runtimeConfig.cdnUrl },
    { rel: 'dns-prefetch', href: runtimeConfig.cdnUrl },
    { rel: 'preconnect', href: runtimeConfig.directusUrl },
    { rel: 'dns-prefetch', href: runtimeConfig.directusUrl },
    ...(i18nHead.value.link || []),
  ],
  meta: [
    {
      hid: isProduction.value ? 'robots' : 'force-robots',
      name: 'robots',
      content: isProduction.value ? 'index, follow' : 'noindex, nofollow',
    },
    {
      hid: 'google-site-verification',
      name: 'google-site-verification',
      content: runtimeConfig.googleSiteVerification,
    },
    ...(i18nHead.value.meta || []),
  ],
})
</script>

<style lang="scss" scoped></style>
