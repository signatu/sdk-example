  const config = {
  mode: "development",
  entry: {
    "consent-simple": __dirname + "/examples/consent-simple/index.jsx",
  },
  devServer: {
    port: 8000,
  },
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
