/*
  Warnings:

  - The primary key for the `Pres` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Pres" DROP CONSTRAINT "Pres_pkey",
ADD CONSTRAINT "Pres_pkey" PRIMARY KEY ("clnt_code", "pres_type", "pres_effe_stt_date", "effe_end_date", "prod_code");
