var choice = document.getElementById('choice')
var sources = document.getElementById('sources')
var top_headlines = document.getElementById('top');
var everything = document.getElementById('everything')
var searchB = document.getElementById('searchB')

function selectionsStatus(value) {
    if(value){
        category.style = 'background-color : #eae8e8'
        countryCodes.style = 'background-color : #eae8e8'
    }
    else{
        category.style = 'background-color : none'
        countryCodes.style = 'background-color : none'
    }
    countryCodes.disabled = value
    category.disabled = value
}