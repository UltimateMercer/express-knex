import { Request, Response } from "express";
import UsersRepository from "../repositories/UsersRepository";
import crypto from "crypto";

class UserController {
  async index(req: Request, res: Response) {
    const { orderBy } = req.query;
    const users = await UsersRepository.findAll(orderBy);
    res.json(users);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const user = await UsersRepository.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  }

  async store(req: Request, res: Response) {
    const { name, username, email, avatar, description, role_id } = req.body;

    if (!name || !username || !email || !req.body.password) {
      return res.status(400).json({ error: "Data is required!" });
    }

    const userExists = await UsersRepository.findByEmail(email);

    if (userExists) {
      return res.status(400).json({ error: "This e-mail is already in use!" });
    }

    const hash_token = crypto.randomBytes(64).toString("base64");
    const password = crypto
      .pbkdf2Sync(req.body.password, hash_token, 1000, 64, "sha512")
      .toString("base64");

    const user = await UsersRepository.create({
      name,
      username,
      email,
      avatar,
      description,
      password,
      hash_token,
      role_id,
    });

    res.json(user);
  }
}

export default new UserController();
