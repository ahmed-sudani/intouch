sources.onclick = ()=> {
            choice.innerHTML = ""
            choice.appendChild(category)
            choice.append(lang)
            choice.appendChild(countryCodes)  
            select(sources)
            selectionsStatus(false)
        }
