import {CreateCustomerInput} from "./customer.schema";
import prisma from "../utils/prisma";
import { runQuery } from "../utils/db-connect";

export async function createCustomer( data: CreateCustomerInput){
    return prisma.customer.create({
        data
    })
}

export async function listCustomers(){

    return prisma.customer.findMany({
        select: {
            id: true,
            code: true,
            name: true,
            shortName: true,
            presType: true,
            type: true,
        }
    })
}

export async function newListCustomers(){

    return prisma.$queryRaw`
        select distinct agen.agen_code,
                        agen.name,
                        agen.short_name,
                        CASE
                            WHEN pres.pres_type = 'B' THEN 'BUYER'
                            WHEN pres.pres_type = 'P' THEN 'PAYER'
                            END AS pres_type
        from "Agency" as agen
                 JOIN "Pres" as pres on agen_code = pres.clnt_code
        WHERE pres.pres_type IN ('B', 'P')
        union
        select distinct advt.advt_code,
                        advt.name,
                        advt.short_name,
                        CASE
                            WHEN pres.pres_type = 'B' THEN 'BUYER'
                            WHEN pres.pres_type = 'P' THEN 'PAYER'
                            END AS pres_type
        from "Advertiser" as advt
                 JOIN "Pres" as pres on advt.advt_code = pres.clnt_code
        WHERE pres.pres_type IN ('B', 'P')`;
}


export async function newListCustomersFromLLMK(){
    runQuery();
}
