var path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|mp4)$/i,
        use: 'file-loader'
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: 'file-loader'
      },
      // {
      //   test: /\.mp3$/,
      //   include: path.resolve(__dirname, 'public'),
      //   loader: 'file-loader'
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};