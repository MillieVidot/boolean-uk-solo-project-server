const { Router } = require("express")
const { addStatus, addStatuses, getAllStatuses } = require("./controller")

const statusRouter = Router() //starts an instance of Router

statusRouter.post("/", addStatus)
// statusRouter.post("/", addStatuses)
statusRouter.get("/", getAllStatuses)

module.exports = statusRouter
