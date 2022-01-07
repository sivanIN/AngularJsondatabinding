var app=angular.module('empApp',[]);

app.controller('empCtrl',function($scope,$http){
    

    $http(
        {
            method:"GET",
            url:"/model/emp.json"
        }
    ).then((response)=>{
        
        $scope.records=response.data;
        
    })
})