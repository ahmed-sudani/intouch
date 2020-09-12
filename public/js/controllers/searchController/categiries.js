let categories = ["Chose Category : ", "business", "entertainment", "general", "health", "science", "sports", "technology"]
        var category = document.createElement('select')
        category.id = 'category'
        for(let i = 0; i < categories.length; i++) {
            let option = document.createElement('option')
            option.value = categories[i]
            option.innerText = categories[i]
            category.appendChild(option)
        }
