// 定义模块
var theaters = angular.module('in_theaters',['ui.router','myError'])

// 定义控制器
theaters.controller('in_theaters',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
  $scope.theatersList=[];
  // 变量
  var page= $stateParams.page;
  // 定义pageabc，用来控制到第一页时不能在往下跳转
  $scope.abc=page;
    $http({
      url:' http://localhost:3000/in_theaters',
      methods:'get',
      params:{
        _page:page,
        _limits:10,
      }
      }).then(res=>{
        // console.log(page)
        // console.log(res);
        $scope.theatersList=res.data;
        // console.log( $scope.theatersList)
      });

      // 上一页下一页要执行的方法
      $scope.getPage=function(num){
        var newPage=page-0 +num;//page-0将page转换成num类型
        location.hash="#!in_theaters/"+newPage;//location.hash获取域名#后面的参数
      }
    
}])