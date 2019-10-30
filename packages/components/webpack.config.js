const path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}