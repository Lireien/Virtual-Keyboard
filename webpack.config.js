const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Virtual Keyboard',
      template:'./src/index.html'
    })
  ],

  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.(png|jpg|svg|gif)$/,
        use: ['file-loader'] 
      },
      {
        test:/\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']

      }
    ]
  }
};