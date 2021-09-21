const db = require("../../utils/database")

const { asset } = db

async function getAllAssets(req, res) {
  console.log("getAllAssets ran")
  try {
    const Assets = await asset.findMany()
    res.json(Assets)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function getAssetById(req, res) {
  const { id } = req.params
  console.log("getAssetById ran")
  try {
    const oneAsset = await asset.findUnique({
      where: { id: parseInt(id) },
    })
    res.json({ oneAsset })
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

module.exports = { getAllAssets, getAssetById }
