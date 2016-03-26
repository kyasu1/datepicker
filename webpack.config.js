var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('css/style.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['babel-loader', 'ts-loader'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss'
      )
    }]
  }
};
