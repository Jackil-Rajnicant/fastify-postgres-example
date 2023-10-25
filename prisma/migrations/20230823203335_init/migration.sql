-- AddForeignKey
ALTER TABLE "Pres" ADD CONSTRAINT "pres_advt_fk" FOREIGN KEY ("clnt_code") REFERENCES "Advertiser"("advt_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pres" ADD CONSTRAINT "pres_agen_fk" FOREIGN KEY ("clnt_code") REFERENCES "Agency"("agen_code") ON DELETE RESTRICT ON UPDATE CASCADE;
