var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

const VENDOR_LIBS = [
  'react',
  'redux',
  'recompose',
  'react-dom',
  'prop-types',
  'react-redux',
  'react-router-dom',
  'classnames',
  'fetch-jsonp',
  'formik',
  'moment',
  'qs',
  'yup'
]

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: true,
    compress: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    runtimeChunk: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' }
    ])
  ]
}
