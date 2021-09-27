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

async function addOnePolicy(req, res) {
  const { lastName, userId, cost, startDate, endDate } = req.body
  const randomInt = () => {
    return Math.floor(Math.random() * 1000)
  }
  const quoteId =
    `MC${lastName}` +
    new Date().getFullYear() +
    randomInt() +
    new Date().getMonth()
  console.log("addOnePolicy ran", req.body)
  try {
    const newPolicy = await policy.create({
      data: {
        userId: parseInt(userId),
        quoteNumber: quoteId,
        cost: parseInt(cost),
        startDate: startDate,
        endDate: endDate,
        image:
          "https://cdn4.iconfinder.com/data/icons/business-solid-the-capitalism/64/Contract_approved-512.png",
      },
    })
    res.json(newPolicy)
  } catch (error) {
    console.log(error)
    res.json({ error: error })
  }
}

module.exports = { getAllPolicies, getPolicyById, addOnePolicy }
