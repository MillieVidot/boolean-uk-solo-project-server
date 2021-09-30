const { Router } = require("express")
const {
  getAllPolicies,
  getPolicyById,
  addOnePolicy,
  patchOnePolicy,
} = require("./controller")

const policyRouter = Router() //starts an instance of Router

policyRouter.get("/", getAllPolicies)
policyRouter.get("/:id", getPolicyById)
policyRouter.post("/", addOnePolicy)
policyRouter.patch("/", patchOnePolicy)

module.exports = policyRouter
