const { Router } = require("express")
const { getAllUsers, getUserById } = require("./controller")

const userRouter = Router() //starts an instance of Router

userRouter.get("/", getAllUsers)
userRouter.get("/:id", getUserById)

module.exports = userRouter
