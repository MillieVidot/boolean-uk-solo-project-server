const { Router } = require("express")
const { getAllUsers, getUserById, addOneUser } = require("./controller")

const userRouter = Router() //starts an instance of Router

userRouter.get("/", getAllUsers)
userRouter.post("/user/login", getUserById)
userRouter.post("/", addOneUser)

module.exports = userRouter
