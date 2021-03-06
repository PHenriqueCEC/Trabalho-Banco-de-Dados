import express from "express";
import cors from "cors";
import { routes } from "../routes";

import "@shared/infra/mysql/connection";

import "@shared/container";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server running in port 3333"));