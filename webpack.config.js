const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
          // Babel options should be put into .babelrc
          // Other config methods are babel.config.js, .babelrc.js or package.json
          // The recommend method is babel.config.js
          // options: {
          //   presets: ['@babel/preset-env', '@babel/react']
          // }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}