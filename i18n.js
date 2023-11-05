module.exports = {
  locales: ['en', 'de', 'it'],
  defaultLocale: 'de',
  loader: false, 
  pages: {
    '*': ['common'],
    '/': ['home'],
    '/second-page': ['home'],
    '/apartments': ['apartments'],
    '/apartments/gartenblick': ['apartments']
  },
  loadLocaleFrom: async (locale, namespace) =>
  import(`./locales/${locale}/${namespace}`).then((r) => r.default),
}