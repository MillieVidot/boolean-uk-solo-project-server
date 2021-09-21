/*
  Warnings:

  - You are about to drop the `NextOfKin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NextOfKinsOnUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NextOfKinsOnUsers" DROP CONSTRAINT "NextOfKinsOnUsers_NextOfKinId_fkey";

-- DropForeignKey
ALTER TABLE "NextOfKinsOnUsers" DROP CONSTRAINT "NextOfKinsOnUsers_userId_fkey";

-- DropTable
DROP TABLE "NextOfKin";

-- DropTable
DROP TABLE "NextOfKinsOnUsers";

-- CreateTable
CREATE TABLE "Asset" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "policyId" INTEGER NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Asset_name_key" ON "Asset"("name");

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "Policy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
