const { Router } = require("express")
const { getAllPackages, getPackageById } = require("./controller")

const packageRouter = Router() //starts an instance of Router

packageRouter.get("/", getAllPackages)
packageRouter.get("/:id", getPackageById)

module.exports = packageRouter
