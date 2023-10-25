import {FastifyRequest} from "fastify";
import {createCustomer, listCustomers, newListCustomers} from "./customer.service";
import {CreateCustomerInput} from "./customer.schema";

export async function createCustomerHandle(request: FastifyRequest<{
    Body: CreateCustomerInput}>){
    return await createCustomer(request.body);
}

export async function listAllCustomers(){
    return await listCustomers();
}

export async function listNewAllCustomers(){
    return await newListCustomers();
}