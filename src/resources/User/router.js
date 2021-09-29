const { Router } = require("express")
const {
  getAllUsers,
  getUserById,
  addOneUser,
  getPoliciesByCitizenId,
} = require("./controller")

const userRouter = Router() //starts an instance of Router

userRouter.get("/", getAllUsers)
userRouter.post("/user/login", getUserById)
userRouter.post("/", addOneUser)
userRouter.post("/user/policies", getPoliciesByCitizenId)

module.exports = userRouter
