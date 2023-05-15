import { Request, Response } from "express";
import RolesRepository from "../repositories/RolesRepository";

class RoleController {
  async index(req: Request, res: Response) {
    const { orderBy } = req.query;
    const roles = await RolesRepository.findAll(orderBy);
    res.json(roles);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const role = await RolesRepository.findById(id);

    if (!role) {
      return res.status(404).json({ error: "Role not found!" });
    }
    res.json(role);
  }

  async store(req: Request, res: Response) {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required!" });
    }

    const role = await RolesRepository.create({ title });

    res.json(role);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title } = req.body;

    const roleExists = await RolesRepository.findById(id);

    if (!roleExists) {
      return res.status(404).json({ error: "Role not found!" });
    }

    if (!title) {
      return res.status(404).json({ error: "Title is Required!" });
    }

    const role = await RolesRepository.update(id, { title });

    res.json(role);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await RolesRepository.delete(id);

    res.sendStatus(204);
  }
}

export default new RoleController;
