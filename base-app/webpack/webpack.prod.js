const { merge } = require("webpack-merge");

const definePlugin = require("./plugins/define-plugin");
const webpackBase = require("./webpack.base");

require("dotenv").config({ path: "./.env.production" });

module.exports = merge(webpackBase, {
  mode: "production",
  plugins: [definePlugin()],
});
