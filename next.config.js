const withPreact = require('next-plugin-preact')

module.exports = withPreact({
  compiler: {
    removeConsole: true,
  },
  trailingSlash: true,
  images: {
    domains: ['localhost'],
    path: '/',
    loader: "custom",
  }
})
