import Fastify, {FastifyReply, FastifyRequest} from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { withRefResolver } from "fastify-zod";
import userRoute from "./modules/user/user.route";
import {userSchemas} from "./modules/user/user.schema";
import fastifyJwt from "@fastify/jwt";
import { customerSchemas} from "./modules/customer/customer.schema";
import customerRoute from "./modules/customer/customer.route";
import { version } from "../package.json";


export const server = Fastify()

declare module "fastify" {
    export interface FastifyInstance {
        authenticate: any;
    }
}

server.register(fastifyJwt, {
    secret: 'asdsfsdfagfhsdhHDFHFHFdhfhdf2e1e13d32w2f32vv2vhahhf'
})

server.decorate(
    "authenticate",
    async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            await request.jwtVerify();
        } catch (e) {
            return reply.send(e);
        }
    }
);


server.get('/healthcheck', async function (){
    return { status: "OK"};
})

async function main() {


    for(const schema of [...userSchemas,...customerSchemas]){
        server.addSchema(schema);
    }

     server.register(fastifySwagger, {
        mode: 'dynamic',
         openapi: {
             info: {
                 title: "Fastify API",
                 description: "API for some products",
                 version,
             },
         },
    })

    server.register(fastifySwaggerUi, {
        routePrefix: '/docs',
        staticCSP: true,
    })

    server.register(userRoute, {prefix:'api/users'})
    server.register(customerRoute, {prefix:'api/customers'})

    try {
        await server.listen(3000, '0.0.0.0');
        console.log(`Server ready at http://localhost:3000`);
    }catch (e){
        console.error(e);
        process.exit(1)
    }
}
main();