
var path = require("path");

const webpackConfig = {
    entry: './src/app.ts',
    output: {
      path: path.join(__dirname, '../dist'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [ 
            { test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' }]
  }
};

module.exports = webpackConfig;