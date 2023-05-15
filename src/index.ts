import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
// import "express-async-errors";
require("express-async-errors");
import "dotenv/config";

import routes from "./routes";

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(routes);

app.use(
  (error: any, request: Request, response: Response, next: NextFunction) => {
    console.log(error);
    response.sendStatus(500);
  }
);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
