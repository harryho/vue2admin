var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var webpack = require("webpack");

var env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      // To add extra plugins, you need to tail the following part
      // jquery is NOT a peer dependency in jquery.inputmask so a alias
      // is used here to force jquery.inputmask to use your jquery
      // version
      'jquery': path.resolve(__dirname, '../node_modules/jquery/dist/jquery'),
      'jquery.ui.widget': path.resolve(__dirname, '../node_modules/jquery-ui/ui/widget.js'),
      // Switch dependency lib accordingly (this one uses jquery)
      'inputmask.dependencyLib': path.resolve(__dirname, '../node_modules/jquery.inputmask/dist/inputmask/inputmask.dependencyLib'),
      // Core library (order of these aliases shouldn't matter FYI)
      'inputmask': path.resolve(__dirname, '../node_modules/jquery.inputmask/dist/inputmask/inputmask'),
      // Allows use of jquery input mask via jquery chaining api/$('selector').inputmask(...)
      'jquery.inputmask': path.resolve(__dirname, '../node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask'),
      // Add extensions following the pattern below remember to import them as necessary in your .js files
      'inputmask.numeric.extensions': path.resolve(__dirname, '../node_modules/jquery.inputmask/dist/inputmask/inputmask.numeric.extensions'),
      'icheck': path.resolve(__dirname, '../node_modules/icheck/icheck.min.js'),
      'raphael': path.resolve(__dirname, '../node_modules/raphael/raphael.min.js'),
      'morrisjs': path.resolve(__dirname, '../node_modules/morris.js/morris.js'),
      'flot': path.resolve(__dirname, '../node_modules/flot/jquery.flot.js')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: [/node_modules/, /demo/, /static/]
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        exclude: /demo/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: [/node_modules/, /demo/, /static/]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ],
    plugins: [
      new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  },
}
