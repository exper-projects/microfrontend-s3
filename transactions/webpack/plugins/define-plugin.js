const { DefinePlugin } = require("webpack");

module.exports = () =>
  new DefinePlugin({
    "process.env": JSON.stringify(process.env),
  });
