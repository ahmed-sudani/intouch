top_headlines.onclick = ()=>{
    async function adde(){
        choice.innerHTML =  '<div class="radioB" id="top-sources">sources<span id="top-sources-icon"></span></div>'
    }
    adde().then(()=>{
        var top_sources = document.getElementById('top-sources')
        top_sources.onclick = ()=>{
            if(top_sources.classList.contains('checked')){
                top_sources.classList.remove('checked')
                selectionsStatus(false)

            }
            else{
                top_sources.classList.add('checked')
                selectionsStatus(true)
            }
        }
    })
    select(top_headlines)
    choice.appendChild(countryCodes)
    choice.appendChild(category)
    top_headlines.classList.add("selected")
    sources.classList.remove("selected")
}
