const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/lib/ori/index.js',
  output: {
    path: path.resolve(__dirname, './src'),
    filename: 'ori.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}