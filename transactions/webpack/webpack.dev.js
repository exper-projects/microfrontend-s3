const { merge } = require("webpack-merge");

const definePlugin = require("./plugins/define-plugin");
const webpackBase = require("./webpack.base");

require("dotenv").config({ path: "./.env.development" });

module.exports = merge(webpackBase, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    port: process.env.PORT,
    open: false,
    historyApiFallback: true,
  },
  plugins: [definePlugin()],
});
