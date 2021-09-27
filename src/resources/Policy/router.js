const { Router } = require("express")
const { getAllPolicies, getPolicyById, addOnePolicy } = require("./controller")

const policyRouter = Router() //starts an instance of Router

policyRouter.get("/", getAllPolicies)
policyRouter.get("/:id", getPolicyById)
policyRouter.post("/", addOnePolicy)

module.exports = policyRouter
