const db = require("../../utils/database")

const { category } = db

async function addCategories(req, res) {
  const categoriesArray = body.req
  console.log("addCategories ran")
  try {
    const Categories = await category.createMany({ data: categoriesArray })
    res.json(Categories)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function getAllCategories(req, res) {
  console.log("getAllCategories ran")
  try {
    const Categories = await category.findMany()
    res.json(Categories)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

module.exports = { addCategories, getAllCategories }
