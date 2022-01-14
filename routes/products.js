const express = require('express')
const globalvars = require('./../globals')

const articlesPath = globalvars.articlesPath
const productsPath = globalvars.productsPath

const router = express.Router()


router.get("/", (req, res) => {
    res.render('products/index', {
        productsRoot: productsPath,
        articlesRoot: articlesPath
    })
})

module.exports = router