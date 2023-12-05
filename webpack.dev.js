const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: true,
    port: 9000,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
    // Configure devServer to serve additional files
    devMiddleware: {
      writeToDisk: true,
    },
    // Additional setup for serving JSON file
    onAfterSetupMiddleware: function (devServer) {
      devServer.app.get('/public/data/quis.json', (req, res) => {
        res.sendFile(path.join(__dirname, 'src/public/data/quis.json'));
      });
    },
  },
});
