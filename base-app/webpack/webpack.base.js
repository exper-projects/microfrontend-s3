const path = require("path");

const bundleStatsWebpackPlugin = require("./plugins/bundle-stats-webpack-plugin");
const cleanWebpackPlugin = require("./plugins/clean-webpack-plugin");
const htmlWebpackPlugin = require("./plugins/html-webpack-plugin");
const moduleFederation = require("./plugins/module-federation");
const handleCss = require("./rules/handle-css");
const handleImages = require("./rules/handle-images");
const handleSvg = require("./rules/handle-svg");
const handleTs = require("./rules/handle-ts");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.ts"),
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.[chunkhash:8].js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [handleCss(), handleTs(), handleImages(), handleSvg()],
  },
  plugins: [
    htmlWebpackPlugin(),
    cleanWebpackPlugin(),
    bundleStatsWebpackPlugin(),
    moduleFederation(),
  ],
};
