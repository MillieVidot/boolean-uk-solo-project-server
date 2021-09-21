const { Router } = require("express")
const { getAllAssets } = require("./controller")

const assetRouter = Router() //starts an instance of Router

assetRouter.get("/", getAllAssets)
// assetRouter.get("/:id", getAssetById)

module.exports = assetRouter
