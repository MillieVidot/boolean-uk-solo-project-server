/*
  Warnings:

  - The `name` column on the `Category` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `categoryId` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CategoryCat" AS ENUM ('STRUCTURAL', 'MOBILITY', 'VITALS', 'NONE');

-- DropIndex
DROP INDEX "Category_name_key";

-- AlterTable
ALTER TABLE "Asset" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "name",
ADD COLUMN     "name" "CategoryCat" NOT NULL DEFAULT E'NONE';

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
