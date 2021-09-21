const { Router } = require("express")
const { getAllQuotes, getQuoteById } = require("./controller")

const quoteRouter = Router() //starts an instance of Router

quoteRouter.get("/", getAllQuotes)
quoteRouter.get("/:id", getQuoteById)

module.exports = quoteRouter
