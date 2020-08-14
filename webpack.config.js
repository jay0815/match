const path = require('path');

module.exports = (env = {}, argv) => {

  const isCoverage = !!env.test;

  const isReport = !!env.report;

  const BASE_DEV_SERVER = {
    hot: true,
    port: isReport ? 9100 : 3000,
    historyApiFallback: true,
    open: true,
    compress: false
  };

  if (isReport) {
    BASE_DEV_SERVER.contentBase = path.join(__dirname, 'coverage/lcov-report');
  }

  const devServer = isCoverage ? void 0 : BASE_DEV_SERVER;

  const config = {
    mode: 'development',
    devtool: 'source-map',
    devServer: devServer,
    module: {
      rules: [{
        test: /\.js?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'coverage'),
        ],
        use: {
          loader: 'babel-loader'
        }
      }]
    }
  };

  return config;
};