"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUsers = async (req, res) => {
    try {
        const users = await prisma.users.findMany();
        res.status(200).json(users);
    }
    catch (error) {
        console.log("error fetching user", error);
        res.status(500).json({ message: "Error retrieving users" });
    }
};
exports.getUsers = getUsers;
