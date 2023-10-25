import { FastifyInstance } from "fastify";
import {createCustomerHandle, listAllCustomers, listNewAllCustomers} from "./customer.controller";
import { $ref } from "./customer.schema";
import {newListCustomers, newListCustomersFromLLMK} from "./customer.service";

async function customerRoutes(server: FastifyInstance) {
    server.post(
        "/",
        {
            preHandler: [server.authenticate],
            schema: {
                body: $ref("createCustomerSchema"),
                response: {
                    201: $ref("customerResponseSchema"),
                },
            },
        },
        createCustomerHandle
    );

    server.get(
        "/",
        {
            schema: {
                response: {
                    200: $ref("customersResponseSchema"),
                },
            },
        },

        listAllCustomers
    );

    server.get(
        "/advertisers",
        {
            schema: {
                response: {
                    200: $ref("newCustomersResponseSchema"),
                },
            },
        },

        newListCustomersFromLLMK
    );
}

export default customerRoutes;