-- CreateTable
CREATE TABLE "Package" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "activities" TEXT[],
    "img" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);
