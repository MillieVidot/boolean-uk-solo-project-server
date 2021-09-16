import db from "../../utils/database"

const { user } = db

async function getAllUsers(req, res) {
  try {
    const users = await user.findMany()
    res.json({ users })
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

export { getAllUsers }
