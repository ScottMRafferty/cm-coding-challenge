var path = require('path');
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyESPlugin = require('uglify-es-webpack-plugin');

module.exports = {
    entry: {
        "bundle" : path.resolve(__dirname, '../src/client/client.js')
    },
    output: {
      path: path.resolve(__dirname, '../public_html/js/dist'),
      publicPath: './js/dist/',
      filename: '[name].[chunkhash].js'
    },
    module: {
      loaders: [
        {
          test: /(?:src\/).+(?:.jsx)$/,
          loader: 'babel-loader',
          query: {
              presets:['react', 'es2015', 'stage-2']
          }
        },
        {
          test: /(?:src\/).+(?:.js)$/,
          loader: 'babel-loader',
          query: {
              presets:['react', 'es2015', 'stage-2']
          }
        }
      ]
    },
    plugins: [
    //  new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: JSON.stringify('dev')
          }
      }),
      new CleanWebpackPlugin(['public_html/js/dist'],{ root: path.resolve(__dirname , '..')}),
      new HtmlWebpackPlugin({
          title: 'Custom template',
          template: '../src/client/index_template.html',
          filename: '../../index.html'
      }),
      //new webpack.HashedModuleIdsPlugin()
      //new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor'
      //}),
      //new webpack.optimize.CommonsChunkPlugin({
      //   name: 'runtime'
      //})
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  };
  
  