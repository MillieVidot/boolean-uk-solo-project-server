const { Router } = require("express")
const { getAllPolicies, getPolicyById } = require("./controller")

const policyRouter = Router() //starts an instance of Router

policyRouter.get("/", getAllPolicies)
policyRouter.get("/:id", getPolicyById)

module.exports = policyRouter
