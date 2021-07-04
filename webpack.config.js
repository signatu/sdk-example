const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "development",
  entry: {
    "consent-simple": __dirname + "/examples/consent-simple/index.jsx",
  },
  devServer: {
    port: 8000,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: "Signatu Cookie Notice",
    //   template: "src/apps/index.ejs",
    //   chunks: ["vendors~cookie-button", "cookie-button"],
    //   filename: `${__dirname}/dist/packaged/${package.version}/cookie-button.html`,
    // }),
  ],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".css"],
    fallback: {
      stream: false,
      crypto: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
};
module.exports = config;
