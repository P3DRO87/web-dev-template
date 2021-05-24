const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "compiler.js",
    path: path.resolve(__dirname, "js-compiler"),
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
    modules: [path.join(__dirname, "src"), "node_modules"],
  },
  plugins: [],
};
