const { Router } = require("express")
const { addCategories, getAllCategories } = require("./controller")

const categoryRouter = Router() //starts an instance of Router

categoryRouter.post("/", addCategories)
categoryRouter.get("/", getAllCategories)

module.exports = categoryRouter
