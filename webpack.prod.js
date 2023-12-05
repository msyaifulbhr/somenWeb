const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // Copy the JSON file to the output directory
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src/public/data/quis.json'),
          to: path.join(__dirname, 'dist/public/data/quis.json'),
        },
      ],
    }),
  ],
});
