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
  const { id } = req.params
  console.log("getUserById ran")
  try {
    const oneUser = await user.findUnique({
      where: { id: parseInt(id) },
    })
    res.json({ oneUser })
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

module.exports = { getAllUsers, getUserById }
