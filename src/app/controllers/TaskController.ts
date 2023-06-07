import { Request, Response } from "express";
import TasksRepository from "../repositories/TasksRepository";

import { OrderBy } from "@/src/types";

class TaskController {
  async index(req: Request, res: Response) {
    const { orderBy } = req.query;
    const tasks = await TasksRepository.findAll(orderBy);
    res.json(tasks);
  }
}

export default new TaskController();
