var webpack = require('webpack');
var path = require('path');

const webpackConfig = {
  entry: {
    tsx: './src/main.tsx',
    html: './src/index.html'
  },
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
      test: /\.html$/,
      loader: 'file?name=[name].[ext]'
    }, {
      test: /\.css$/,
      exclude: /styles/,
      loaders: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss-loader'
      ]
    }, {
      test: /\.css$/,
      include: /styles/,
      loaders: [
        'style-loader',
        'css-loader?sourceMap',
        'postcss-loader'
      ]
    }, {
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
