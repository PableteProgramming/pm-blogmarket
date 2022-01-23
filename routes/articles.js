const express = require('express')
const globalvars = require('./../globals')
const Article = require('../models/articles')

const articlesPath = globalvars.articlesPath
const productsPath = globalvars.productsPath

const router = express.Router()

router.get("/", (req, res) => {
    res.render("articles/index", {
        productsRoot: productsPath,
        articlesRoot: articlesPath
    })
})

router.get("/new", (req, res) => {
    /* what to access the new article page */
    res.render("articles/new")
})

router.post("/", async(req, res, next) => {
    /* request fr creating a new article */
    let newArticle = new Article({
        title: req.body.title,
        description: req.body.description
    })
    try {
        article = await article.save()
    } catch (e) {
        res.redirect("/")
    }
    res.send(`new article with title: ${req.body.title}`)
})

module.exports = router