const db = require("../../utils/database")

const { package } = db

async function getAllPackages(req, res) {
  console.log("getAllPackages ran")
  try {
    const packages = await package.findMany()
    res.json(packages)
  } catch (error) {
    console.log(error)
    res.json({ error: error })
  }
}

async function getPackageById(req, res) {
  const { id } = req.params
  console.log("getPackageById ran", id)
  try {
    const onePackage = await package.findUnique({
      where: { id: parseInt(id) },
    })
    res.json(onePackage)
  } catch (error) {
    console.log(error)
    res.json({ error: error })
  }
}

module.exports = { getAllPackages, getPackageById }
