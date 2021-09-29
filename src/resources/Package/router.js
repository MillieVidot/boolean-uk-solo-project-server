const { Router } = require("express")
const { getAllPackages, getPackageById, addPackages } = require("./controller")

const packageRouter = Router() //starts an instance of Router

packageRouter.post("/", addPackages)
packageRouter.get("/", getAllPackages)
packageRouter.get("/:id", getPackageById)

module.exports = packageRouter
