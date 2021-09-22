/*
  Warnings:

  - You are about to drop the column `policyId` on the `Asset` table. All the data in the column will be lost.
  - Added the required column `packageId` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PackageCat" AS ENUM ('STRUCTURAL', 'MOBILITY', 'VITALS', 'AREA', 'SENSES');

-- AlterEnum
ALTER TYPE "CategoryCat" ADD VALUE 'SENSES';

-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_policyId_fkey";

-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "policyId",
ADD COLUMN     "packageId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "AssetsOnPolicies" (
    "id" SERIAL NOT NULL,
    "assetId" INTEGER NOT NULL,
    "policyId" INTEGER NOT NULL,

    CONSTRAINT "AssetsOnPolicies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Package" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "packageCat" "PackageCat" NOT NULL,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Package_name_key" ON "Package"("name");

-- AddForeignKey
ALTER TABLE "AssetsOnPolicies" ADD CONSTRAINT "AssetsOnPolicies_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetsOnPolicies" ADD CONSTRAINT "AssetsOnPolicies_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "Policy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
