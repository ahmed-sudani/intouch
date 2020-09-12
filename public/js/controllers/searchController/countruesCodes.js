var countries = ['Select Rigon : ', 'ae', 'ar', 'at', 'au', 'be', 'bg',
        'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de',
        'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie',
        'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma',
        'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl',
        'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si',
        'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za']
var countryCodes = document.createElement('select')
countryCodes.id = 'countryCodes'
for(let i = 0; i < countries.length; i++) {
  let option = document.createElement('option')
  option.value = countries[i]
  option.innerText = countries[i]
  countryCodes.appendChild(option)
}

