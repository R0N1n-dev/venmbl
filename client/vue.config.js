module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: "http://localhost:3000",
        },
      },
    },
  },
};
/*const webpack = require("webpack");
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        // test: /\.xxx$/, // may apply this only for some modules
        options: {
          proxy: {
            devServer: {
              "/api": {
                target: "http://localhost:3000",
                ws: true,
              },
            },
          },
        },
      }),
    ],
  },
};*/
