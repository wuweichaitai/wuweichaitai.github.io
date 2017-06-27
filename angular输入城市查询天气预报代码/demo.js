/**
 * Created by dell on 2017/6/27.
 */
var app = angular.module("app",[]);
app.controller("text",function ($scope,$http) {
    $scope.change = function () {

        $http({
            method:"jsonp",
            url:"http://api.map.baidu.com/telematics/v3/weather?location="+$scope.data+"&output=json&ak=tQydkkwXfEtSNgvAEHUr1v6u0GbXUvZo&&callback=JSON_CALLBACK"
        }).success(function (res) {
            console.log(res)
        })

    }
})