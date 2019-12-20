const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  entry: ['./src/app.js',],

  output: {

    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'

  },

  module: {

    rules: [{

    }]

  },

  plugins: [

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new CleanWebpackPlugin()
  ]

};


