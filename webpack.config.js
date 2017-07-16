/* eslint-env node */

"use strict";

module.exports = {
  target: "electron-renderer",
  entry: {
    index: "./src/index.ts",
  },
  output: {
    filename: "[name].js",
    path: `${__dirname}`,
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
