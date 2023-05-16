import { Request, Response } from "express";
import UsersRepository from "../repositories/UsersRepository";

class UserController {
  async index(req: Request, res: Response) {
    const { orderBy } = req.query;
    const users = await UsersRepository.findAll(orderBy);
    res.json(users);
  }
}

export default new UserController();
