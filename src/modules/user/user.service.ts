import prisma from "../utils/prisma";
import {hashPassword} from "../utils/hash";
import {CreateUserInput} from "./user.schema";


export async function createUser(input: CreateUserInput){
    const { password, ...rest } = input;

    const {hash, salt} = hashPassword(password);

    return prisma.user.create({
        data: {...rest, salt, password: hash}
    });
}

export async  function findUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: {
            email
        }
    })
}

export async function findAllUsers(){
    return prisma.user.findMany({
        select: {
            email: true,
            name: true,
            id: true,
        },
    });
}