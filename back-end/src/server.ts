import express from "express";
// import * as cors from 'cors';
import router from "./routes";

const app = express();

app.use(express.json());
app.use(router);