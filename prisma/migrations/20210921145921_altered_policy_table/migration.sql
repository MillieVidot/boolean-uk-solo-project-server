/*
  Warnings:

  - You are about to drop the column `quoteId` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the `Quote` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[quoteNumber]` on the table `Policy` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `Policy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quoteNumber` to the `Policy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusId` to the `Policy` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PolicyStages" AS ENUM ('QUOTE_EXPIRED', 'POLICY_ACTIVE', 'QUOTE_OFFER', 'POLICY_CANCELLED', 'QUOTE_CANCELLED');

-- DropForeignKey
ALTER TABLE "Policy" DROP CONSTRAINT "Policy_quoteId_fkey";

-- DropIndex
DROP INDEX "Policy_quoteId_unique";

-- AlterTable
ALTER TABLE "Policy" DROP COLUMN "quoteId",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "quoteNumber" TEXT NOT NULL,
ADD COLUMN     "statusId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Quote";

-- CreateTable
CREATE TABLE "Status" (
    "id" SERIAL NOT NULL,
    "stage" "PolicyStages" NOT NULL DEFAULT E'QUOTE_OFFER',

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Policy_quoteNumber_key" ON "Policy"("quoteNumber");

-- AddForeignKey
ALTER TABLE "Policy" ADD CONSTRAINT "Policy_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
