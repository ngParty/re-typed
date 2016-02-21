var webpackConfig = require('./webpack.conf.js');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    client: {
      chai: {
        includeStack: true
      }
    },
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './test/test-bundler.js'
    ],
    preprocessors: {
      'test/test-bundler.js': [ 'webpack', 'sourcemap' ]
    },
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['mocha'],
    singleRun: true,
    webpack: {
      devtool: 'eval-source-map', //'inline-source-map',
      debug: true,
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    }
  });
};
