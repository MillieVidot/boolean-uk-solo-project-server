const db = require("../../utils/database")

const { status } = db

async function addStatuses(req, res) {
  const statusesArray = body.req
  console.log("addStatuses ran")
  try {
    const Statuses = await asset.createMany({ data: statusesArray })
    res.json(Statuses)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function getAllStatuses(req, res) {
  console.log("getAllStatuses ran")
  try {
    const Statuses = await status.findMany()
    res.json(Statuses)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

module.exports = { addStatuses, getAllStatuses }
