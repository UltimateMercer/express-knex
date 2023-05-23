import { Request, Response } from "express";
import OrganizationsRepository from "../repositories/OrganizationsRepository";

class OrganizationController {
  async index(req: Request, res: Response) {
    const { orderBy } = req.query;
    const organizations = await OrganizationsRepository.findAll(orderBy);
    res.json(organizations);
  }
}

export default new OrganizationController();
