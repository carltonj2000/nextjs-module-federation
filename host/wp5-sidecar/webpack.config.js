const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: { path: path.resolve(__dirname, "dist") },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  devServer: {
    port: 4001,
  },
  output: {
    publicPath: "http://localhost:4001/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      library: { type: "var", name: "host" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./DogImage": "../components/DogImage",
      },
      shared: require("../package.json").dependencies,
    }),
  ],
};
