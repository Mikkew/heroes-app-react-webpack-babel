const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");

/** @type { import('webpack').Configuration } */
const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "../dist"),
    },
  },
  target: "web",
  devtool: "eval-source-map",
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(), 
  ],
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i,
      },
    ],
  },
};

module.exports = merge(common, devConfig);
