var path = require('path');

module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "./app/tmp/scripts"),
    filename: "app.js"
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