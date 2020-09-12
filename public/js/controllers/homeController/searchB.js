var searchB = ($scope, $http)=>{
    
    if($scope.search){
        $http.post('http://localhost:7777/everything', {
            q : `"${$scope.search}"`
        }).then((result)=>{
            $scope.articles = result.data.articles
        }).catch((err)=>{

        })
    }
}
