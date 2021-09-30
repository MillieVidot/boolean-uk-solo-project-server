const db = require("../../utils/database")

const { user } = db

async function getAllUsers(req, res) {
  console.log("getAllUsers ran")
  try {
    const users = await user.findMany()
    res.json(users)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function getUserById(req, res) {
  const { citizenId, password } = req.body
  console.log("getUserById ran", req.body)
  try {
    const oneUser = await user.findFirst({
      where: { AND: [{ citizenId: citizenId }, { password: password }] },
      select: {
        id: true,
        citizenId: true,
        firstName: true,
        lastName: true,
      },
    })
    res.json(oneUser)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function getPoliciesByCitizenId(req, res) {
  console.log("getPoliciesByCitizenId ran", req.body)
  const { citizenId } = req.body
  try {
    const userPolices = await user.findMany({
      where: { citizenId: citizenId },
      select: {
        policies: {
          select: {
            id: true,
            quoteNumber: true,
            userId: true,
            cost: true,
            startDate: true,
            endDate: true,
            status: {
              select: { stage: true },
            },
            image: true,
          },
        },
      },
    })
    res.json(userPolices)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function addOneUser(req, res) {
  // const { citizenId, firstName, lastName, password } = req.body
  console.log("addOneUser ran", req.body)
  try {
    const newUser = await user.create({
      data: req.body,
    })
    res.json(newUser)
  } catch (error) {
    console.log(error)
    res.json({ error: error })
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  addOneUser,
  getPoliciesByCitizenId,
}
