const express = require('express')
const mongoose = require('mongoose')
const productsRouter = require('./routes/products')
const articlesRouter = require('./routes/articles')
const globalvars = require('./globals')
const bodyparser = require('body-parser')
const Article = require('./models/articles')

const articlesPath = globalvars.articlesPath
const productsPath = globalvars.productsPath

mongoose.connect(process.env.MONGODB_URI)

const app = express()

//mongoose.connect("mongodb://localhost/blogmarket")

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(productsPath, productsRouter)
app.use(articlesPath, articlesRouter)


app.get("/", async(req, res) => {
    let articles = await Article.find()

    res.render('index', {
        productsRoot: productsPath,
        articlesRoot: articlesPath,
        articles: articles
    })
})


app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000")
})