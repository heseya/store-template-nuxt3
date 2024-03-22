export default defineEventHandler((event) => {
  setResponseHeader(event, 'Cache-Control', 'private, no-cache, no-store, max-age=0')
  // setResponseHeader(event, 'Cache-Control', 's-maxage=15, stale-while-revalidate')
})
