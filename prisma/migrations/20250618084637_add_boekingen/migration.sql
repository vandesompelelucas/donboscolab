-- CreateTable
CREATE TABLE "Boeking" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "datumId" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Boeking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Datums" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "open" BOOLEAN NOT NULL,
    "titel" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Datums_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Boeking" ADD CONSTRAINT "Boeking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boeking" ADD CONSTRAINT "Boeking_datumId_fkey" FOREIGN KEY ("datumId") REFERENCES "Datums"("id") ON DELETE CASCADE ON UPDATE CASCADE;
