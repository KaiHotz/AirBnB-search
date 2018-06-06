const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const VENDOR_LIBS = [
  'react-datepicker',
  'classnames',
  'fetch-jsonp',
  'formik',
  'moment',
  'qs',
  'yup',
]

module.exports = {
  entry: {
    bundle: ['babel-polyfill', './src/index.jsx'],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    chunkFilename: '[name].[hash].js',
    filename: '[name].[hash].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
    compress: true,
    open: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        use: 'eslint-loader',
        exclude: /node_modules/,
        include: path.src,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    runtimeChunk: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AirBnB Search',
      template: 'src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' },
    ]),
  ],
}
