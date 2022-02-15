import express from "express";
import { routes } from "../routes";

import "@shared/infra/mysql/connection"

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server running in port 3333"));