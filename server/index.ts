 require("dotenv").config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import router from "./router";
import errorMiddleware from './middlewares/errorMiddleware';


const PORT:number = Number(process.env.PORT) || 5000;
const DB_URL:string = String(process.env.DB_URL)
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
}));
app.use("/api", router);
app.use(errorMiddleware)

const start = async (): Promise<void> => {
  try {
    await mongoose.connect(DB_URL, {
    } as mongoose.ConnectOptions);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
