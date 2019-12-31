// 导入jquery import *** from *** 是es6中的导包模式
import $ from 'jquery' // 导入jquery 使用$变量来接收
//导入样式表
import './css/index.css'
//导入bootstrap的样式
// 如果要通过路径的方式引入node_modules的文件可以省略这一层目录
// 默认去node_modules下面找
import 'bootstrap/dist/css/bootstrap.css'
$(function () {
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor',function () {
        return '#' + 'ddffd0'
    })
})


class Person{
    static info = {name:'zs',age:20}
}
