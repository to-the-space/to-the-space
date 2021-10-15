const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const commonConfiguration = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = merge(commonConfiguration, {
  mode: "production",
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      systemvars: true,
    }),
  ],
});
