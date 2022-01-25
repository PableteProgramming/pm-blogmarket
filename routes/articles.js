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

router.get("/show/:id", async(req, res) => {
    res.render("articles/show", { article: await Article.findById(req.params.id) })
})

router.post("/", async(req, res, next) => {
    /* request for creating a new article */
    let newArticle = new Article({
        title: req.body.title,
        description: req.body.description
    })
    try {
        newArticle = await newArticle.save()
        res.render("articles/show", { article: newArticle })
    } catch (e) {
        res.redirect("/")
    }
})

module.exports = router