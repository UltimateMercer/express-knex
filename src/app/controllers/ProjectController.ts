import { Request, Response } from "express";
import ProjectsRepository from "../repositories/ProjectsRepository";

class ProjectController {
  async index(req: Request, res: Response) {
    const { orderBy } = req.query;
    const projects = await ProjectsRepository.findAll(orderBy);
    res.json(projects);
  }
}

export default new ProjectController();
