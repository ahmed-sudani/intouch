const news = require('express').Router();
const apikey = require('../config/news-api-key');
const NEWS = require('newsapi');
const newsapi = new NEWS(apikey)

news.post('/top-headlines', (req, res, next)=>{
    console.log(req.body)
    newsapi.v2.topHeadlines(req.body)
    .then((result)=>{
        res.json(result) 
    }).catch((err)=>{
        res.status(403)
        res.json(err)
    })
})

news.post('/everything', (req, res, next)=>{
    newsapi.v2.everything(req.body)
    .then((result)=>{
        res.json(result)  
    })
    .catch((err)=>{
        res.status(443)
        res.json(err)
    })
})

news.post('/sources', (req, res, next)=>{
    newsapi.v2.sources(req.body) 
    .then((result)=>{
        res.json(result)  
    })
    .catch((err)=>{
        res.send(403)
        res.json(err)
    })
})

module.exports = news