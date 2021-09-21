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

const statusesData = [
  { stage: "QUOTE_EXPIRED" },
  { stage: "POLICY_ACTIVE" },
  { stage: "QUOTE_OFFER" },
  { stage: "POLICY_CANCELLED" },
  { stage: "QUOTE_CANCELLED" },
]

const policiesData = [
  {
    userId: 1,
    quoteNumber: "quote1a",
    cost: 100,
    startDate: new Date(2018, 10).toISOString(),
    endDate: new Date(2019, 10).toISOString(),
    statusId: 1,
    image:
      "https://cdn4.iconfinder.com/data/icons/business-solid-the-capitalism/64/Contract_approved-512.png",
  },
  {
    userId: 2,
    quoteNumber: "quote2b",
    cost: 150,
    startDate: new Date(2020, 06).toISOString(),
    endDate: new Date(2021, 06).toISOString(),
    statusId: 2,
    image:
      "https://cdn4.iconfinder.com/data/icons/business-solid-the-capitalism/64/Contract_approved-512.png",
  },
  {
    userId: 3,
    quoteNumber: "quote3b",
    cost: 200,
    startDate: new Date(2018, 02).toISOString(),
    endDate: new Date(2019, 02).toISOString(),
    statusId: 3,
    image:
      "https://cdn4.iconfinder.com/data/icons/business-solid-the-capitalism/64/Contract_approved-512.png",
  },
]

const assetsData = [
  {
    name: "Heart",
    cost: 124,
    image:
      "https://www.kindpng.com/picc/m/207-2075563_png-file-icon-white-transparent-png-medical-heart.png",
    categoryId: 3,
    packageId: 1,
  },
  {
    name: "Lung (Left)",
    cost: 342,
    image:
      "https://www.pinclipart.com/picdir/middle/329-3295706_lungs-icon-lung-logo-clipart.png",
    categoryId: 3,
    packageId: 1,
  },
  {
    name: "Eye",
    cost: 530,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    categoryId: 5,
    packageId: 1,
  },
  {
    name: "Eyes (Pair)",
    cost: 1000,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    categoryId: 5,
    packageId: 1,
  },
  {
    name: "Flat Bones",
    cost: 599,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    categoryId: 1,
    packageId: 1,
  },
  {
    name: "Long Bones",
    cost: 399,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    categoryId: 1,
    packageId: 1,
  },
  {
    name: "Short Bones",
    cost: 299,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    categoryId: 1,
    packageId: 1,
  },
  {
    name: "Irregular Bones",
    cost: 1899,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    categoryId: 1,
    packageId: 1,
  },
  {
    name: "Sesamoid Bones",
    cost: 199,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    categoryId: 1,
    packageId: 1,
  },
  {
    name: "Brain",
    cost: 1999,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    categoryId: 3,
    packageId: 1,
  },
  {
    name: "Stomach",
    cost: 500,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    categoryId: 3,
    packageId: 1,
  },
  {
    name: "Nervous System",
    cost: 1199,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    categoryId: 3,
    packageId: 1,
  },
  {
    name: "Cochlear",
    cost: 1199,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    categoryId: 5,
    packageId: 1,
  },
]

const packagesData = [
  {
    name: "Structural",
    cost: 2249,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    packageCat: "STRUCTURAL",
  },
  {
    name: "Mobilty",
    cost: 4999,
    image:
      "https://www.pinclipart.com/picdir/middle/329-3295706_lungs-icon-lung-logo-clipart.png",
    packageCat: "MOBILITY",
  },
  {
    name: "Vitals",
    cost: 3499,
    image:
      "https://www.kindpng.com/picc/m/207-2075563_png-file-icon-white-transparent-png-medical-heart.png",
    packageCat: "VITALS",
  },
  {
    name: "Full Clone",
    cost: 9999,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    packageCat: "AREA",
  },
  {
    name: "Arms (Pair)",
    cost: 1499,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    packageCat: "AREA",
  },
  {
    name: "Legs (Pair)",
    cost: 1499,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    packageCat: "AREA",
  },
  {
    name: "Head",
    cost: 1999,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    packageCat: "AREA",
  },
  {
    name: "Torso",
    cost: 2999,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    packageCat: "AREA",
  },
  {
    name: "Senses",
    cost: 5999,
    image:
      "https://icon-library.com/images/eyeball-icon-png/eyeball-icon-png-25.jpg",
    packageCat: "SENSES",
  },
]

const categoriesData = [
  { name: "STRUCTURAL" },
  { name: "MOBILITY" },
  { name: "VITALS" },
  { name: "NONE" },
]

async function seedDb() {
  console.log("Seeded")
  try {
    const statuses = await db.status.createMany({
      data: statusesData,
    })

    const categories = await db.category.createMany({
      data: categoriesData,
    })

    const users = await db.user.createMany({
      data: usersData,
    })

    const policies = await db.policy.createMany({
      data: policiesData,
    })

    const assets = await db.asset.createMany({
      data: assetsData,
    })

    const packages = await db.package.createMany({
      data: packagesData,
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
