// // 导入jquery import *** from *** 是es6中的导包模式
// import $ from 'jquery' // 导入jquery 使用$变量来接收
// //导入样式表
// import './css/index.css'
// //导入bootstrap的样式
// // 如果要通过路径的方式引入node_modules的文件可以省略这一层目录
// // 默认去node_modules下面找
// import 'bootstrap/dist/css/bootstrap.css'
//
// $(function () {
//     $('li:odd').css('backgroundColor','yellow')
//     $('li:even').css('backgroundColor',function () {
//         return '#' + 'ddffd0'
//     })
// })
//
//
// class Person{
//     static info = {name:'zs',age:20}
// }



/********************************************************************************************************************/
// 在webpack 中尝试使用vue
// 注意：在webpack 中使用import Vue from 'vue' 导入的vue功能是不完整的，只是提供了runtime-only 的方式，没有提供像网页中那样的使用方式
// 包的查找规则，找项目根目录中有没有node_modules文件夹
// 在node_modules 中根据包名找对应的vue文件夹
//在vue文件夹中，找一个叫做package.json 的包配置文件
// 在package.json文件中找一个main属性【main属性指定了这个包在被家在的时候的入口文件】
// 需要在webpack.config.js中设置resolve
import Vue from 'vue';
//默认 webpack无法打包vue文件，要安装loader
// npm  i vue-loader vue-template-compiler -D
import login from './login.vue'
// vue-router 的使用
/*
装包 npm i vue-router
导包 import VueRouter from 'vue-router'
手动安装 Vue.use(VueRouter)
创建路由对象  var router = new VueRouter({ routers;[路由对象列表]})
将路由对象挂载到vm上
 */
import VueRouter from 'vue-router'
Vue.use(VueRouter)

var vm = new Vue({
    el:'#app',
    data:{
        msg:123
    },
    // components:{
    //     login
    // }
    // render:function(createElements){
    //     return createElements(login)
    // } 原型
    render:c=>c(login) // 简写
})
/*
总结：webpack 中如何使用
1、安装包 npm i vue -S
2、安装解析vue文件的loader      npm i vue-loader vue-template-complier -D
3、在mian.js中导入vue模块 import Vue from 'vue'
4、定义一个vue组件，组件三部分 template script style
5、使用import导入组件
6、创建vm实例
7、使用render函数渲染模版
8、es6中使用export default 和export向外暴露成员
*/

/*
es6中导包格式 import 模块名称 from '模块标识符'  或者 import '表示路径'
es6 向外暴露成员 使用export default 和export
export default 向外暴露的成员可以使用任意变量接收
export default 在一个模块中向外暴露的成员只能暴露一次
在一个模块中可以同时使用export default和export
export暴露的成员只能使用{ 暴露的对象名 }
export 在一个模块中暴露的成员可以暴露多个




*
node 导包格式 使用var 名称= require（'模块标识符'）
module.exports 和 exports 来暴露成员
* */
