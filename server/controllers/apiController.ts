import express, { Request, Response, NextFunction } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

export async function POST_log_in(req: Request, res: Response, next: NextFunction){
    const user = await User.findOne({username:req.body.username});

    if(user &&(await bcrypt.compare(req.body.password, user.password))){
        const token = jwt.sign(user._id, `${process.env.SECRET}`, {expiresIn: "15m"});
        res.json({accessToken:token});
    }else{
        res.status(400).json({message:"Erorr"});
    }
}

