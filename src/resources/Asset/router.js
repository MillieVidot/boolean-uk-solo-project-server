const { Router } = require("express")
const {
  getAllAssets,
  getAssetById,
  getCartAssetsById,
  addAssets,
} = require("./controller")

const assetRouter = Router() //starts an instance of Router

assetRouter.post("/", addAssets)
assetRouter.get("/", getAllAssets)
assetRouter.get("/:id", getAssetById)
assetRouter.post("/cart/assets", getCartAssetsById)
// assetRouter.get("/category", getAssetByCat)

module.exports = assetRouter
