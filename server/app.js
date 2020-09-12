const express = require('express') 
const bodyParser = require('body-parser')
const news = require('./routes/news');
const httpErrors = require('http-errors');
const app = express()
const serveStatic = require('serve-static');
//medelware to server static files
app.use(serveStatic('public'))

//medelwares for barsing json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use(news)
app.get('/search', (req, res)=>{ 
    res.redirect('http://localhost:7777/pages/search.html')
})

app.listen(7777, (err) => {
    if(!err){
        console.log('App listening on port 7777!') 
    }
}) 