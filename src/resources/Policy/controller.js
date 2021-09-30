const { parse } = require("dotenv")
const db = require("../../utils/database")

const { policy } = db

async function getAllPolicies(req, res) {
  console.log("getAllPolicies ran")
  try {
    const policies = await policy.findMany({
      where: {
        userId: parseInt(id),
      },
      include: {
        status: {
          select: { stage: true },
        },
      },
    })
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
  const { currentUserId, lastName, assetsIds, packagesIds, cost } = req.body
  console.log("addOnePolicy ran with:", req.body)

  const startDate = new Date()
  const endDate = (d =>
    new Date(d.getFullYear() + 1, d.getMonth(), d.getDate()))(new Date())

  const randomInt = () => {
    return Math.floor(Math.random() * 1000)
  }
  const quoteId =
    `MC${lastName}` +
    new Date().getFullYear() +
    randomInt() +
    new Date().getMonth()

  try {
    const newPolicyTest = await policy.create({
      data: {
        userId: parseInt(currentUserId),
        quoteNumber: quoteId,
        cost: parseInt(cost),
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        statusId: 2,
        image:
          "https://cdn4.iconfinder.com/data/icons/business-solid-the-capitalism/64/Contract_approved-512.png",
        AssetsOnPolicies: { createMany: { data: assetsIds } },
        PackagesOnPolicies: { createMany: { data: packagesIds } },
      },
      include: {
        status: {
          select: { stage: true },
        },
      },
    })

    res.json(newPolicyTest)
  } catch (error) {
    console.log(error)
    res.json({ error: error })
  }
}

async function patchOnePolicy(req, res) {
  const { quoteNumber } = req.body
  console.log("patchOnePolicy ran", req.body)
  try {
    const onePolicy = await policy.update({
      where: { quoteNumber: quoteNumber },
      data: {
        statusId: 4,
      },
      // include: {
      //   status: {
      //     select: { stage: true },
      //   },
      // },
    })
    res.json(onePolicy)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

module.exports = { getAllPolicies, getPolicyById, addOnePolicy, patchOnePolicy }
