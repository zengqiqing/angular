//1. 定义模块对象
var routerApp = angular.module('my-router', ['ui.router'])
//2. 进行路由配置
routerApp.config(['$stateProvider', function (stateProvider) {
  stateProvider.state({
    name: 'home',//不能省略
    url: '/home',//url中访问的格式
    templateUrl: './home/home.html',
    // controller:''
  })
  stateProvider.state({
    name: 'comming_soon',//不能省略
    url: '/comming_soon',//url中访问的格式
    templateUrl: './comming_soon/comming_soon.html',
    // controller:''
  })
  stateProvider.state({
    name: 'top250',//不能省略
    url: '/top250',//url中访问的格式
    templateUrl: './top250/top250.html',
    // controller:''
  })
    stateProvider.state({
    name: 'in_theaters',//不能省略
    url: '/in_theaters',//url中访问的格式
    templateUrl: './in_theaters/in_theaters.html',
    // controller:''
  })

}])