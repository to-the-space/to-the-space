const { merge } = require("webpack-merge");
const commonConfiguration = require("./webpack.common.js");
const portFinderSync = require("portfinder-sync");

module.exports = merge(commonConfiguration, {
  mode: "development",
  devServer: {
    compress: true,
    port: portFinderSync.getPort(3000),
  },
});
