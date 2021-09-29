const { Router } = require("express")
const { addStatuses, getAllStatuses } = require("./controller")

const statusRouter = Router() //starts an instance of Router

statusRouter.post("/", addStatuses)
statusRouter.get("/", getAllStatuses)

module.exports = statusRouter
