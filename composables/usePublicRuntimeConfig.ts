export const usePublicRuntimeConfig = () => {
  const { public: config } = useRuntimeConfig()
  return config
}
