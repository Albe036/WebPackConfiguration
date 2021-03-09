const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'public/[name].html',
        template: path.resolve(__dirname, './src/index.html')/* ,
        minify:{
          collapseWhitespace: true,
          removeRedundantAttributes:true,
          removeco:true,
          removeStyleLinkTypeAttributes: true,
          removeScriptTypeAttributes: true,
          useShortDoctype: true
        } */
        })
    ]
};