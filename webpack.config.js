const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
        "@": path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Basic Blog", filename: "index.html", template: "./src/index.html" }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
