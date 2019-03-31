const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: {
    editor: './src/components/note/webview/componentEditor.js'
  },
  output: {
    path: path.join(__dirname, './src/components/note/webview/dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src/components/note/webview')],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['last 2 versions', 'safari >= 7']
                  }
                }
              ],
              '@babel/preset-react'
            ],
            plugins: ['babel-plugin-transform-object-rest-spread'],
            babelrc: false
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/components/note/webview/template.html',
      chunks: ['editor'],
      inject: 'body',
      filename: 'NoteEditor.html'
    })
  ]
};
