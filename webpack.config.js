/* eslint-env node */

"use strict";

const path = require("path");

module.exports = {
  target: "electron-renderer",
  entry: {
    index: "./src/index.ts",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "lib"),
    sourceMapFilename: "[file].map",
    library: "hyper-background",
    libraryTarget: "umd",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
};
