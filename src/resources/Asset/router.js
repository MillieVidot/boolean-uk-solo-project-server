const { Router } = require("express")
const { getAllAssets, getAssetById } = require("./controller")

const assetRouter = Router() //starts an instance of Router

assetRouter.get("/", getAllAssets)
assetRouter.get("/:id", getAssetById)
// assetRouter.get("/category", getAssetByCat)

module.exports = assetRouter
