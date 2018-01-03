// 处理图片加载错误的处理,查找加载错误的图片，给默认图片填充渲染
var common=angular.module('myError',[])
common.directive('myError',function(){
  return{
// 自定义指令函数内部的定义好的Link方法
// attribute获取当前元素设置指令的所有属性
// $scope:angular里面的一些内置的属性
// element：元素的包装集
    link:function($scope,element,attribute){
      console.log($scope);
      console.log('11111');
      console.log(element);
      console.log('11111');
      
      console.log(attribute);
      
      // element:包装集
      // 图片加载的两个事件：load成功，error失败
      element.on('error',function(){
        //  console.log(attribute)
        // attribute获取 myerror设置
        element.attr('src',attribute.myError)
       
      })
    }
  }
})