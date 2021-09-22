-- CreateTable
CREATE TABLE "PackagesOnPolicies" (
    "id" SERIAL NOT NULL,
    "packageId" INTEGER NOT NULL,
    "policyId" INTEGER NOT NULL,

    CONSTRAINT "PackagesOnPolicies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PackagesOnPolicies" ADD CONSTRAINT "PackagesOnPolicies_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackagesOnPolicies" ADD CONSTRAINT "PackagesOnPolicies_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "Policy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
