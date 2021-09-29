const db = require("../../utils/database")

const { status } = db

async function addStatus(req, res) {
  console.log("addStatus ran")
  try {
    const Status = await status.create({ data: req.body })
    res.json(Status)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function addStatuses(req, res) {
  console.log("addStatuses ran")
  try {
    const Statuses = await status.createMany({ data: req.body })
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

module.exports = { addStatus, addStatuses, getAllStatuses }
