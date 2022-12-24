import express from "express";
import { GET_index, POST_sign_up } from "../controllers/apiController";

const router = express.Router();

router.get("/", GET_index);

router.post("/sign-up", POST_sign_up);

export default router;