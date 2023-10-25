-- CreateTable
CREATE TABLE "Agency" (
    "agen_code" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "short_name" VARCHAR(255) NOT NULL,
    "effe_stt_date" INTEGER NOT NULL,
    "effe_end_date" INTEGER NOT NULL,
    "next_addr_no" INTEGER NOT NULL,
    "tax_reg_number" VARCHAR(255) NOT NULL,
    "posting_method" INTEGER NOT NULL,
    "no_of_changes" INTEGER NOT NULL,
    "clnt_ledger_chg" INTEGER NOT NULL,
    "echo_file_yn" VARCHAR(255) NOT NULL,
    "creation_datestamp" INTEGER NOT NULL,
    "chg_ind" VARCHAR(255) NOT NULL,
    "caria_file_yn" VARCHAR(255) NOT NULL,
    "external_ref_text" VARCHAR(255) NOT NULL,
    "inc_holdings" VARCHAR(255) NOT NULL,
    "group_no" INTEGER NOT NULL,
    "schd_create_basis" VARCHAR(255) NOT NULL,
    "override_demo_rest_yn" VARCHAR(255) NOT NULL,
    "schd_create_basis_nm" VARCHAR(255) NOT NULL,
    "company_reg_no" VARCHAR(255) NOT NULL,

    CONSTRAINT "Agency_pkey" PRIMARY KEY ("agen_code")
);

-- CreateTable
CREATE TABLE "Advertiser" (
    "advt_code" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "short_name" VARCHAR(255) NOT NULL,
    "effe_stt_date" INTEGER NOT NULL,
    "effe_end_date" INTEGER NOT NULL,
    "direct_client_ind" VARCHAR(255) NOT NULL,
    "next_addr_no" INTEGER NOT NULL,
    "tax_reg_number" VARCHAR(255) NOT NULL,
    "bsar_no" INTEGER NOT NULL,
    "no_of_changes" INTEGER NOT NULL,
    "clnt_ledger_chg" INTEGER NOT NULL,
    "echo_file_yn" VARCHAR(1) NOT NULL,
    "advt_ref" INTEGER NOT NULL,
    "acct_mngr_posn_code" VARCHAR(6) NOT NULL,
    "planner_posn_code" VARCHAR(6) NOT NULL,
    "next_ordr_no" INTEGER NOT NULL,
    "creation_datestamp" INTEGER NOT NULL,
    "chg_ind" VARCHAR(1) NOT NULL,
    "caria_file_yn" VARCHAR(1) NOT NULL,
    "external_ref_text" VARCHAR(10) NOT NULL,
    "inc_holdings" VARCHAR(1) NOT NULL,
    "group_no" INTEGER NOT NULL,
    "schd_create_basis" VARCHAR(1) NOT NULL,
    "override_demo_rest_yn" VARCHAR(1) NOT NULL,
    "schd_create_basis_nm" VARCHAR(1) NOT NULL,
    "company_reg_no" VARCHAR(20) NOT NULL,

    CONSTRAINT "Advertiser_pkey" PRIMARY KEY ("advt_code")
);

-- CreateTable
CREATE TABLE "Pres" (
    "prod_code" INTEGER NOT NULL,
    "clnt_code" VARCHAR(255) NOT NULL,
    "pres_effe_stt_date" INTEGER NOT NULL,
    "pres_type" VARCHAR(255) NOT NULL,
    "effe_end_date" INTEGER NOT NULL,
    "no_of_changes" INTEGER NOT NULL,

    CONSTRAINT "Pres_pkey" PRIMARY KEY ("clnt_code")
);

-- AddForeignKey
ALTER TABLE "Pres" ADD CONSTRAINT "pres_advt_fk" FOREIGN KEY ("clnt_code") REFERENCES "Advertiser"("advt_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pres" ADD CONSTRAINT "pres_agen_fk" FOREIGN KEY ("clnt_code") REFERENCES "Agency"("agen_code") ON DELETE RESTRICT ON UPDATE CASCADE;
