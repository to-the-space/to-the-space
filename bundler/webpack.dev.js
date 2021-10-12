const { merge } = require("webpack-merge");
const commonConfiguration = require("./webpack.common.js");
const portFinderSync = require("portfinder-sync");

module.exports = merge(commonConfiguration, {
  mode: "development",
  devServer: {
    static: { directory: path.join(__dirname, "./dist") },
    compress: true,
    hot: true,
    port: portFinderSync.getPort(3000),
  },
});
