var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

/* Using resolve rather than join() is the same as navigating to a file with cd,
    And seen as though webpack likes absolute paths, this is good.
*/
var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: path.resolve(ROOT_PATH, 'app/main.js'),
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css'], include: path.resolve(ROOT_PATH, 'app') }
    ]
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: 'App'
    })
  ]
};

if (TARGET === 'start' || !TARGET) {

  module.exports = merge(common, {
    devtool: 'eval',
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        },
        include: path.resolve(ROOT_PATH, 'app')
      }]
    },

    devServer: {
      port: 4000,
      colors: true,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
