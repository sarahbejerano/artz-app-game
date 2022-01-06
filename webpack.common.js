const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: [
    './src/front/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/, use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      }, //for images
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              url: false,
            }
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: "sass-loader", // translates CSS into CommonJS
            options: {
              sourceMap: true,
            },
          },
        ],
      }, //css only files
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/'
        }
      } //for fonts
    ]
  },
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      img: path.resolve(__dirname, 'src/front/img'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: '4geeks.ico',
      template: 'template.html'
    }),
    new Dotenv({ safe: true, systemvars: true }),
    new CopyPlugin({
      patterns: [{ from: 'src/front/img' }],
      options: {
        concurrency: 100,
      },
    }),
  ]
};