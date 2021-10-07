const { merge } = require("webpack-merge");
const commonConfiguration = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");

module.exports = merge(commonConfiguration, {
  mode: "production",
  devtool: false,
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ],
});
