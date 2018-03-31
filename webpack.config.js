var path = require('path');

module.exports = {
  entry: {
    App: "./app/assets/scripts/app.js",
    Vendor: "./app/assets/scripts/vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/tmp/scripts"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}