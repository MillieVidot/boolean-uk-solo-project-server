/*
  Warnings:

  - A unique constraint covering the columns `[quoteId]` on the table `Policy` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cost` to the `Policy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Policy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quoteId` to the `Policy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Policy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Policy" ADD COLUMN     "cost" INTEGER NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "quoteId" INTEGER NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Quote" (
    "id" SERIAL NOT NULL,
    "quoteNumber" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Quote_quoteNumber_key" ON "Quote"("quoteNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Policy_quoteId_unique" ON "Policy"("quoteId");

-- AddForeignKey
ALTER TABLE "Policy" ADD CONSTRAINT "Policy_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "Quote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
