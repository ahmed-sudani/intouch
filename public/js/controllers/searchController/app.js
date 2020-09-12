angular.module('app', []).controller('search', ($scope, $http)=>{
    searchB.onclick = ()=>{
        search($scope, $http)
    }
})