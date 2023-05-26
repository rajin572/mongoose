import { Request, Response } from "express"
import { createUserToDB, getUserByIdFromDB, getUserFromDB } from "./user.services"

export const getUser = async (req: Request, res: Response) => {
    const getUser = await getUserFromDB();
    res.status(200).json({
        status: 200,
        data: getUser
    })
}

export const getUserByID = async (req:Request, res:Response) => {
    const {id} = req.params
    const getUserByID = await getUserByIdFromDB(id)

    res.status(200).json({
        status: 200,
        data: getUserByID
    })
    
}

export const createUser = async (req: Request, res: Response) => {
    const data = req.body
    const user = await createUserToDB(data);

    res.status(200).json({
        status: 200,
        data: user
    })
}

