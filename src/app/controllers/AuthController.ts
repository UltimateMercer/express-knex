import { Request, Response } from "express";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import { auth } from "../auth";

import AuthRepository from "../repositories/AuthRepository";
import UsersRepository from "../repositories/UsersRepository";
import OrganizationsRepository from "../repositories/OrganizationsRepository";
import ProjectsRepository from "../repositories/ProjectsRepository";

class AuthController {
  async login(req: Request, res: Response) {
    const { login, password } = req.body;

    if (!login || !password) {
    }

    const authData = await AuthRepository.authUser(login);

    if (!authData) {
      return res.status(400).json({ error: "Username or E-mail not found!" });
    }

    const hashPassword = crypto
      .pbkdf2Sync(password, authData.hash_token, 1000, 64, "sha512")
      .toString("base64");

    const bufferHashPassword = Buffer.from(hashPassword);
    const bufferUserPassword = Buffer.from(authData.password);

    const comparePassword = crypto.timingSafeEqual(
      bufferHashPassword,
      bufferUserPassword
    );

    if (!comparePassword) {
      return res.status(401).json({ error: "Password is wrong!" });
    }

    const userData = await UsersRepository.findById(authData.id);
    const organizations = await OrganizationsRepository.findByUser(userData.id);
    // const projects = await ProjectsRepository.findByUser(userData.id);
    const projects = await ProjectsRepository.findAll();

    const token = jwt.sign(
      { id: userData.id, username: userData.username, email: userData.email },
      auth.secret,
      {
        expiresIn: auth.expires,
      }
    );

    const user = {
      ...userData,
      organizations: organizations,
      projects: projects,
    };

    res.json({ user, token });
  }

  async logout(req: Request, res: Response) {}
}

export default new AuthController();
