// 导入jquery import *** from *** 是es6中的导包模式
import $ from 'jquery' // 导入jquery 使用$变量来接收
//导入样式表
import './css/index.css'

$(function () {
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor',function () {
        return '#' + 'ddffd0'
    })
})
