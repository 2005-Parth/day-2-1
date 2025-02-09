import express from "express";
import { getMemes } from "../controller/memeController.js";

const memeRouter = express.Router();

memeRouter.get("/getMemes", getMemes);

export default memeRouter;