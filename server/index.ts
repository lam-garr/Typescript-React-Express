import express, { Express, Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";

dotenv.config();

const mongoDB = `${process.env.MONGODB}`;
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on("error", console.log.bind(console, "db connection error"));

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));



