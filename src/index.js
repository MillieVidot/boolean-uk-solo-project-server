require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const userRouter = require("./resources/User/router")
const policyRouter = require("./resources/Policy/router")
const assetRouter = require("./resources/Asset/router")
const packageRouter = require("./resources/Package/router")

// prod routers to add to db
const statusRouter = require("./resources/Status/router")
const categoryRouter = require("./resources/Category/router")

const app = express()

/* SETUP MIDDLEWARE */

app.disable("x-powered-by")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

/* SETUP ROUTES */

app.use("/users", userRouter)
app.use("/policies", policyRouter)
app.use("/assets", assetRouter)
app.use("/packages", packageRouter)

// prod routers to add to db
app.use("/statuses", statusRouter)
app.use("/categories", categoryRouter)

app.get("*", (req, res) => {
  res.json({ ok: "Server working but route not found" })
})

/* START SERVER */

const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log(`\n👾 Server is running on http://localhost:${port}/\n`)
})
