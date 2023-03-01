// eslint-disable-next-line no-undef
const path = require("path");
// eslint-disable-next-line no-undef
const CleanPlugin = require("clean-webpack-plugin");

// eslint-disable-next-line no-undef
module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
  },
  devtool: "cheap-module-eval-source-map",
  // devServer: {
  //   contentBase: './'
  // }
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
