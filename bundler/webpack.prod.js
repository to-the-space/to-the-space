const { merge } = require("webpack-merge");
const commonConfiguration = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(commonConfiguration, {
  mode: "production",
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      systemvars: true,
    }),
  ],
});
