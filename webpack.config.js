const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包输出目录
    filename: 'bundle.js', // 打包输出文件名
    library: 'MyLibrary', // 将你的组件库暴露为全局变量
    libraryTarget: 'umd', // 使用 UMD 格式打包
    umdNamedDefine: true, // 允许命名 UMD 模块
    globalObject: 'this', // 设置全局对象
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', // 使用 babel 处理 JS 和 JSX 文件
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader', // 使用 sass-loader 处理 SCSS 文件
        ],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './public/index.html', // 用于生成 HTML 文件的模板
    // }),
    new MiniCssExtractPlugin({
      filename: 'main.css', // webpack 打包後，獨立出來的 css 檔名
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // 导入时可以省略后缀名
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 9000,
  // },
};