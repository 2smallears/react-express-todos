var webpack = require('webpack');
module.exports = {
  entry: {
    index: ['./src/index.js', './src/style.css'],
    vendor: [
        'react',
        'react-dom'
    ]
  },
  output: {
    path: './dist/',
    filename: '[name].js',
    publicPath: '/dist'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }
    },{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    inline: true
  }
}
