const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {

  entry: {
    main: path.resolve(__dirname, "./source/assets/javascripts/index.js"),
    previews: path.resolve(__dirname, "./source/assets/javascripts/previews.js"),
    editor_components: path.resolve(__dirname, "./source/assets/javascripts/editor_components.js"),
  },

  output: {
    path: `${__dirname}/dist`,
    filename: `[name].js`
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          output: {
            comments: false
          }
        }
      }),
    ]
	}
};
