const express = require('express')
const mongoose = require('mongoose')
const productsRouter = require('./routes/products')
const articlesRouter = require('./routes/articles')
const globalvars = require('./globals')

const articlesPath = globalvars.articlesPath
const productsPath = globalvars.productsPath

const app = express()

//mongoose.connect("mongodb://localhost/blogmarket")

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(productsPath, productsRouter)
app.use(articlesPath, articlesRouter)


app.get("/", (req, res) => {
    let articles = [{
            title: "Article 1",
            description: "Article 1 desc",
            date: new Date
        },
        {
            title: "Article 2",
            description: "Article 2 desc",
            date: new Date
        },
        {
            title: "Article 3",
            description: "Article 3 desc",
            date: new Date
        },
        {
            title: "Article 4",
            description: "Article 4 desc",
            date: new Date
        }
    ]

    res.render('index', {
        productsRoot: productsPath,
        articlesRoot: articlesPath,
        articles: articles
    })
})


app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000")
})