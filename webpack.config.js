module.exports = options => {
  return {
    entry: __dirname +  '/app/index.js',
    output: {
      path: __dirname + "/public",
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader/url" },
            { loader: "file-loader" }
          ]
        },
      ],
    },
  }
}