const db = require("../../utils/database")

const { quote } = db

async function getAllQuotes(req, res) {
  console.log("getAllquotes ran")
  try {
    const quotes = await quote.findMany()
    res.json(quotes)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function getQuoteById(req, res) {
  const { id } = req.params
  console.log("getQuoteById ran")
  try {
    const oneQuote = await quote.findUnique({
      where: { id: parseInt(id) },
    })
    res.json({ oneQuote })
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

module.exports = { getAllQuotes, getQuoteById }
