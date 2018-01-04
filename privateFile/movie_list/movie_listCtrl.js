// 定义模块
angular.module('movie_list',['myError'])

// 定义控制器
.controller('movie_listCtrl',[
  '$scope',
  '$http',
  '$stateParams',
  function($scope,$http,$stateParams){
  $scope.theatersList=[];
  console.log()
  // 变量
  var page=$stateParams.page;
  // 定义abc，用来控制到第一页时不能在往下跳转
  $scope.abc=page;
  var movie_list=$stateParams.movie_list
    $http({
      url:'http://localhost:3000/'+movie_list,
      methods:'get',
      params:{
        _page:page,
        _limit:10,
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
        // if(newPage<=0)return
        location.hash="#!"+movie_list+"/"+newPage;//location.hash获取域名#后面的参数
      }
    
}])