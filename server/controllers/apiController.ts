import express, { Request, Response, NextFunction } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";

export function GET_index(req: Request, res:Response){
    res.json({message:"Hello World"});
}

export async function POST_sign_up(req: Request, res: Response, next: NextFunction){
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        password: hashedPassword
    }).save(err =>{
        if(err){
            return next(err);
        }else{
            res.json({message:"Success"});
        }
    })
}

