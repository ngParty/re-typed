var webpack = require('webpack');
var path = require('path');

const webpackConfig = {
  entry: [
    './src/main.tsx'
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    preLoaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'tslint',
        include: path.resolve(__dirname, './src')
      }
    ],
    loaders: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  tslint: {
    emitErrors: false,
    formattersDirectory: path.resolve(__dirname, './node_modules/tslint-loader/formatters/')
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    stats: { colors: true },
  }
};

module.exports = webpackConfig;
