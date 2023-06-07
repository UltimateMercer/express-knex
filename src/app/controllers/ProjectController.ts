import { Request, Response } from "express";
import ProjectsRepository from "../repositories/ProjectsRepository";

class ProjectController {
  async index(req: Request, res: Response) {
    const { orderBy } = req.query;
    const projects = await ProjectsRepository.findAll(orderBy);
    res.json(projects);
  }

  async showProjectsByUser(req: Request, res: Response) {
    const { id } = req.params;

    const projects = await ProjectsRepository.findByUser(id);

    if (!projects) {
      return res.status(404).json({ error: "Projects not found!" });
    }
    res.json(projects);
  }
}

export default new ProjectController();
