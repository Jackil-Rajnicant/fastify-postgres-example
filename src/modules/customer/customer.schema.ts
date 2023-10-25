import {z} from 'zod'
import {buildJsonSchemas} from "fastify-zod";

const customerInput = {
    code: z.string(),
    name: z.string(),
    shortName: z.string(),
    presType: z.string(),
    type: z.string()
}

const newCustomer = {
    agen_code: z.string(),
    name: z.string(),
    short_name: z.string(),
    pres_type: z.string()
}

const customerGenerated = {
    id: z.number()
}

const createCustomerSchema = z.object({
    ...customerInput
})
const customerResponseSchema = z.object({
    ...customerInput,
    ...customerGenerated
})

const newCustomerResponseSchema = z.object({
    ...newCustomer
})

const newCustomersResponseSchema = z.array(newCustomerResponseSchema)

const customersResponseSchema = z.array(customerResponseSchema)

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>

export const {schemas: customerSchemas, $ref} = buildJsonSchemas({
    createCustomerSchema,
    customerResponseSchema,
    customersResponseSchema,
    newCustomersResponseSchema
}, { $id: "CustomerSchema" })