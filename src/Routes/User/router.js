import { Router } from "express"
import { getAllUsers } from "./controller"

const userRouter = Router() //starts an instance of Router

userRouter.get("/", getAllUsers)

export default userRouter
