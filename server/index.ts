import express, { Express, Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));



