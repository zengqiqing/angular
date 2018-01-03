//1. 定义模块对象
var routerApp = angular.module('my-router', ['ui.router','in_theaters','comming_soon'])
//2. 进行路由配置
routerApp.config(['$stateProvider', function (stateProvider) {
  stateProvider.state({
    name: 'home',//不能省略
    url: '/home',//url中访问的格式
    templateUrl: './home/home.html',
    // controller:'home'
  })
  stateProvider.state({
    name: 'ui-sref="in_theaters"',//不能省略
    url: '/comming_soon/:page',//url中访问的格式
    templateUrl: './comming_soon/comming_soon.html',
    controller:'comming_soon'
  })
  stateProvider.state({
    name: 'top250',//不能省略
    url: '/top250',//url中访问的格式
    templateUrl: './top250/top250.html',
    // controller:'top250'
  })
    stateProvider.state({
    name: 'in_theaters',//不能省略
    url: '/in_theaters/:page',//url中带参数访问的格式,可以根据参数，跳转到对应的页面
    templateUrl: './in_theaters/in_theaters.html',
    controller:'in_theaters'
  })

}])