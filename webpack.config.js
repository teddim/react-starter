module.exports = {
  entry: __dirname + '/src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    {
        // For pure CSS (without CSS modules)
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  output: {
        filename: 'bundle.js',
        path: __dirname + '/client/dist'
      }
};
