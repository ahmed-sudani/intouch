var startP = ($scope, $http)=>{
    $scope.articles = ["a", "b", "C", "d", "e", "f"]
    $http.post('http://localhost:7777/top-headlines',
    {
        country : 'us',
        pageSize : 10,
        category : 'general'
    })
    .then((result) => {
        console.log(result);
        $scope.articles = result.data.articles
        clearPreloading(true)
    }).catch((err) => {
        console.log(err)
    });
}