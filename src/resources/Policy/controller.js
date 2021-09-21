const db = require("../../utils/database")

const { policy } = db

async function getAllPolicies(req, res) {
  console.log("getAllPolicies ran")
  try {
    const policies = await policy.findMany()
    res.json(policies)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function getPolicyById(req, res) {
  const { id } = req.params
  console.log("getPolicyById ran")
  try {
    const onePolicy = await policy.findUnique({
      where: { id: parseInt(id) },
    })
    res.json({ onePolicy })
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

module.exports = { getAllPolicies, getPolicyById }
