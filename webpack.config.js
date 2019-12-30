const path = require('path')
const webpack = require('webpack')
// 导入html-webpack-plugin
// 这个插件的两个作用1、自动在内存中生成内存的页面。2、自动把打包的bundle.js追加到html中
const htmlWebpackPlugin = require('html-webpack-plugin')

// 这个配置文件就是一个js文件，通过node 中的模块操作，向外暴露了一个配置对象
module.exports = {
    // 手动指定打包的文件入口和出口
    entry: path.join(__dirname,'./src/main.js'),//要打包的文件路径
    // 输出文件的相关配置
    output: {
        path: path.join(__dirname, './dist'),  // 指定输出的文件夹
        filename: "bundle.js"  // 指定输出的文件名称
    },
    // 这是配置dev-server命令的第二种形式
    devServer: {
        open:true,// 打开浏览器
        port:3000,//端口号
        contentBase:'src',//托管的根目录
        hot:true// 日更新
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //创建一个热更新的对象
        // 内存中生成html插件
        new htmlWebpackPlugin({
            // 创建一个在内存中生成的html的创建
            template: path.join(__dirname,'./src/index.html'), // 指定模版页面，将来会根据指定的模版生成内存中的页面
            filename: "index.html" //指定生成的页面的名称
            // 使用这个插件之后，不需要手动处理bundle.js 的引用路径，由插件自动引入
        })
    ],
    //配置第三方模块加载器
    /*
    * webpack处理第三方文件类型的过程
    * 1、发现不是js文件，就去module中找第三方loader
    * 2、调用loader从右往左调用
    * 3、当最后一个loader调用完毕会把结果直接交给webpack进行打包合并最终输出到bundle.js中
    * */
    module: {
        // 所有第三方模块的匹配规则
        rules: [
            {test : /\.css$//* 正则匹配以.css结尾的*/,use:['style-loader','css-loader'] }, // 配置处理css的第三方loader 调用规则从右到左
            {test : /\.css$//* 正则匹配以.css结尾的*/,use:['style-loader','css-loader','less-loader'] },// 配置处理less的第三方loader
        ]
    }
}
// 使用webpack-dev-server 工具进行自动打包
/*
1、安装 npm i webpack-dev-server -D
2、项目本地安装webpack-dev-server 不能当作命令使用（全局的指令才可以在终端正常执行）
3、webpack-dev-server 打包的bundle.js并没有在本地生成，而是托管在电脑内存中，所以找不到打包好的文件
4、在package.json中的script 下的dev 写上webpack-dev-server 表示使用这个服务启动项目
    --open表示启动时打开浏览器，--port 端口号 指定端口， --contentBase src 指定首页路径 --hot热更新
5、webpack无法处理非js文件
6、如果要处理非js类型的文件，需要安装其他的加载器
    处理css文件需要安装style-loader css-loader
    在webpack配置文件中新增一个节点叫做module 他是一个对象，对象上又一个rules属性，这个属性数组，存放第三方文件的匹配和处理规则
 */
