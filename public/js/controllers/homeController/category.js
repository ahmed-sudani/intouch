function checkCategory(child) {
    let ch = document.getElementById('checked')
    ch.id = ""
    child.id = "checked"
}
let items = ["general", "business", "entertainment", "health", "science", "sports", "technology"]
let cat = document.getElementById('category')
var category = ($scope, $http)=>{
    for(let i = 0; i < items.length; i++){
        let child = document.createElement('li')
        if(items[i] === "general"){
            child.id = "checked"
        }
        child.innerText = items[i]
        child.onclick = ()=>{
            checkCategory(child)
            clearPreloading(false)
            $scope.articles = ["a", "b", "C", "d", "e", "f"]
            $http.post('http://localhost:7777/top-headlines', 
                {
                    country : 'us',
                    pageSize : 10,
                    category : items[i]
                })
        .then((result) => {
            $scope.articles = result.data.articles
            clearPreloading(true)
        }).catch((err) => {
            
        })
    }
        cat.appendChild(child)
    }
}