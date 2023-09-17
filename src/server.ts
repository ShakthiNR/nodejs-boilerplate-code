import express, { Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config({
    path: "./.env"
})

const app = express();

const PORT = process.env.PORT || 8080

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World!" })
})

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
})