import { Request, Response } from "express";
import OrganizationsRepository from "../repositories/OrganizationsRepository";

class OrganizationController {
  async index(req: Request, res: Response) {
    const { orderBy } = req.query;
    const organizations = await OrganizationsRepository.findAll(orderBy);
    res.json(organizations);
  }

  async showOrganizationsByUser(req: Request, res: Response) {
    const { id } = req.params;

    const organizations = await OrganizationsRepository.findByUser(id);

    if (!organizations) {
      return res.status(404).json({ error: "Organizations not found!" });
    }
    res.json(organizations);
  }
}

export default new OrganizationController();
