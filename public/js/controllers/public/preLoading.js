async function clearPreloading(value) {
    var bo = document.getElementsByTagName('body').item(0)
    if(value){
        bo.id = ""
    }
    else{
        bo.id = "body"
    }
    }