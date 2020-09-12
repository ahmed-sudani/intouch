var lang_label = document.createElement('label')
        var languages = ['Select Language : ', 'ar', 'de', 'en', 'es', 'fr', 'he',
        'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh']
        var lang = document.createElement('select')
        lang.id = 'lang'
        for(let i = 0; i < languages.length; i++) {
            let option = document.createElement('option')
            option.value = languages[i]
            option.innerText = languages[i]
            lang.appendChild(option)
        }
