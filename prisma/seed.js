// import { PrismaClient } from "@prisma/client"
const { PrismaClient } = require("@prisma/client")
// const prisma = require("./database")

const db = new PrismaClient()

const usersData = [
  {
    citizenId: "566788AZ",
    firstName: "Jonathon",
    lastName: "Vespa",
    password: "test",
  },
  {
    citizenId: "123456AZ",
    firstName: "Millie",
    lastName: "Vidot",
    password: "test",
  },
  {
    citizenId: "3647587Z",
    firstName: "Zack",
    lastName: "Cobb",
    password: "test",
  },
]

const policiesData = [
  {
    userId: 1,
    quoteId: 1,
    cost: 100,
    startDate: new Date(2018, 10).toISOString(),
    endDate: new Date(2019, 10).toISOString(),
  },
  {
    userId: 2,
    quoteId: 2,
    cost: 150,
    startDate: new Date(2020, 06).toISOString(),
    endDate: new Date(2021, 06).toISOString(),
  },
  {
    userId: 3,
    quoteId: 3,
    cost: 200,
    startDate: new Date(2018, 02).toISOString(),
    endDate: new Date(2019, 02).toISOString(),
  },
]

const quotesData = [
  { quoteNumber: "quote1a", cost: 120 },
  { quoteNumber: "quote2b", cost: 1550 },
  { quoteNumber: "quote3b", cost: 1230 },
]

const assetData = [
  {
    name: "Heart",
    cost: 124,
    image:
      "https://www.kindpng.com/picc/m/207-2075563_png-file-icon-white-transparent-png-medical-heart.png",
    category: "Vitals",
  },
  {
    name: "Lung (Left)",
    cost: 342,
    image:
      "https://www.pinclipart.com/picdir/middle/329-3295706_lungs-icon-lung-logo-clipart.png",
    category: "Vitals",
  },
  {
    name: "Eye",
    cost: 530,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    category: "none",
  },
  {
    name: "Eye Pair",
    cost: 1000,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    category: "none",
  },
]

const packageData = [
  {
    name: "Vitals",
    cost: 3499,
    image:
      "https://www.kindpng.com/picc/m/207-2075563_png-file-icon-white-transparent-png-medical-heart.png",
    category: "Vitals",
  },
  {
    name: "Mobilty",
    cost: 4999,
    image:
      "https://www.pinclipart.com/picdir/middle/329-3295706_lungs-icon-lung-logo-clipart.png",
    category: "Mobilty",
  },
  {
    name: "Structural",
    cost: 2249,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    category: "Structural",
  },
  {
    name: "Full Clone",
    cost: 9999,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    category: "none",
  },
]

async function seedDb() {
  console.log("Seeded")
  try {
    const users = await db.user.createMany({
      data: usersData,
    })

    const quotes = await db.quote.createMany({
      data: quotesData,
    })

    const policies = await db.policy.createMany({
      data: policiesData,
    })
  } catch (error) {
    console.log(error)
  }
}

seedDb()
  .catch(e => {
    console.error(e)
  })
  .finally(async () => {
    await db.$disconnect()
  })
