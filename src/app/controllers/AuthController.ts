import { Request, Response } from "express";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import { auth } from "../auth";

import AuthRepository from "../repositories/AuthRepository";
import UsersRepository from "../repositories/UsersRepository";

class AuthController {
  async login(req: Request, res: Response) {
    const { login, password } = req.body;
    // res.json({ login, password });
    const authData = await AuthRepository.authUser(login);

    if (!authData) {
      return res.status(400).json({ error: "Username or E-mail not found!" });
    }

    const hashPassword = crypto
      .pbkdf2Sync(password, authData.hash_token, 1000, 64, "sha512")
      .toString("base64");

    if (hashPassword !== authData.password) {
      return res.status(400).json({ error: "Password is wrong!" });
    }

    const userData = await UsersRepository.findById(authData.id);

    const token = jwt.sign(
      { id: userData.id, username: userData.username, email: userData.email },
      auth.secret,
      {
        expiresIn: auth.expires,
      }
    );

    const user = {
      ...userData,
      token: token,
    };

    res.json(user);
  }

  async logout() {}
}

export default new AuthController();
