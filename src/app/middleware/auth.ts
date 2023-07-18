import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { auth } from "../auth";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer", "");
};

export const validateRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  // console.log(req.header("Authorization"));
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, auth.secret, (err, data) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }

    next();
  });
};
