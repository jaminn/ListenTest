// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.sass$/, loader: 'style!css!sass' }
    ]
  }
};