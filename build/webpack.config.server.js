const path = require('path')
// const ExtractPlugin = require('extract-text-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const VueServerPlugin = require('vue-server-renderer/server-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

let config

const isDev = process.env.NODE_ENV === 'development'

const plugins = [
  // new MiniCssExtractPlugin({
  //   filename: 'styles.[contentHash:8].css'
  // }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.VUE_ENV': '"server"'
  }),
  new VueLoaderPlugin()
]

if (isDev) {
  plugins.push(new VueServerPlugin())
}

config = merge(baseConfig, {
  mode: 'production',
  target: 'node',
  entry: path.join(__dirname, '../client/server-entry.js'),
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  },
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          // https://github.com/webpack-contrib/mini-css-extract-plugin/issues/90
          'vue-style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  plugins
})

config.resolve = {
  alias: {
    'model': path.join(__dirname, '../client/model/server-model.js')
  }
}

module.exports = config
