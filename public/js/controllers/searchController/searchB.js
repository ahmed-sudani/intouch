function post($http, endpoint, args) {
    return $http.post('http://localhost:7777/' + endpoint, args)
}

function search($scope, $http) {
    let searchI = $scope.searchI
    let selected = document.getElementsByClassName('selected')[0]
    if(selected.id === "everything" && searchI){
        post($http, 'everything', {q : searchI}).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }
    else if(selected.id === "top"){
        let top_sources = document.getElementById('top-sources')
        if(top_sources.classList.contains('checked') && searchI){
            post($http, 'top-headlines', {q: searchI, sources : 'sources'})
        }
    }
    else if(selected.id === "sources"){
        
    }
}