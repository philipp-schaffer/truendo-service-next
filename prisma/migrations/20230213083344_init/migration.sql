/*
  Warnings:

  - You are about to drop the `service_identifiers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "service_identifiers";

-- CreateTable
CREATE TABLE "service_identifier" (
    "id" TEXT NOT NULL,
    "id_grp" TEXT NOT NULL,
    "identifier_type" TEXT NOT NULL,
    "def_service_id" TEXT NOT NULL,
    "prop_key" TEXT NOT NULL,
    "prop_value" TEXT NOT NULL,
    "prop_is_identifying" TEXT NOT NULL,
    "version_from" INTEGER NOT NULL,
    "version_to" INTEGER NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL,
    "date_modified" TIMESTAMP(3) NOT NULL,
    "config_id" TEXT NOT NULL,

    CONSTRAINT "service_identifier_pkey" PRIMARY KEY ("id")
);
