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
    })
    res.json(oneUser)
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

module.exports = { getAllUsers, getUserById, addOneUser }
