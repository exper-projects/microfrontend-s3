const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJson = require("../../package.json");

const deps = packageJson.dependencies;

module.exports = () =>
  new ModuleFederationPlugin({
    name: "placedTrade",
    filename: "remoteEntry.js",
    exposes: {
      "./App": "./src/App",
    },
    shared: {
      ...deps,
      react: {
        import: "react",
        shareKey: "react",
        shareScope: "default",
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
      "react-router-dom": {
        singleton: true,
        requiredVersion: deps["react-router-dom"],
      },
      "styled-components": {
        singleton: true,
        requiredVersion: deps["styled-components"],
      },
    },
  });
