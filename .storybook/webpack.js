const path = require("path");

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, '.')
    },
    {
      test: /\.css$/,
      loader: 'style-loader'
    },
    {
      test: /\.css$/,
      loader: 'css-loader',
      query: {
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      }
    }
    ]
  }
};