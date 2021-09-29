const db = require("../../utils/database")

const { asset } = db

async function addAssets(req, res) {
  console.log("addAssets ran")
  try {
    const Assets = await asset.createMany({ data: req.body })
    res.json(Assets)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

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
  console.log("getAssetById ran", id)
  try {
    const oneAsset = await asset.findUnique({
      where: { id: parseInt(id) },
    })
    res.json(oneAsset)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function getCartAssetsById(req, res) {
  const { cartAssetIds } = req.body
  console.log("getCartAssetById ran", cartAssetIds)
  // try {
  //   const oneAsset = await asset.findUnique({
  //     where: { id: parseInt(id) },
  //   })
  //   res.json({ oneAsset })
  // } catch (error) {
  //   console.log(error)
  //   res.json(error)
  // }
}

// async function getAssetByCat(req, res) {
//   const { id } = req.params
//   console.log("getAssetByCat ran", id)
//   try {
//     const foundAssets = await asset.findMany({
//       where: { categoryId: parseInt(id) },
//     })
//     res.json({ foundAssets })
//   } catch (error) {
//     console.log(error)
//     res.json(error)
//   }
// }

module.exports = { getAllAssets, getAssetById, getCartAssetsById, addAssets }
