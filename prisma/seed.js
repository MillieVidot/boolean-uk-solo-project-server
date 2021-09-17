import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

async function seedDb() {}

seedDb()
  .catch(e => {
    console.error(e)
  })
  .finally(async () => {
    await db.$disconnect()
  })
