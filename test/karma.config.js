var webpackConfig = require('../build/webpack.test.js')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],

    files: ['**/*.spec.js'],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },

    reporters: ['spec'],

    browsers: ['ChromeHeadless']
  })
}