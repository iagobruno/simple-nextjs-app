const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withImages(withCSS(withLess({
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/index' },
      '/about': { page: '/about', query: { username: 'httpiago' } }
    }
  }
})))