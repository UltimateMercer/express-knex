import { TableNames } from "../../database/eTableNames";
import { Knex } from "../../database/knex";
import { IRole } from "@/src/database/models";

class RolesRepository {
  async findAll(orderBy: any = "ASC") {
    const direction = orderBy?.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await Knex<IRole>(TableNames.ROLES).select().orderBy('title', direction);
    return rows;
  }

  async findById(id: string) {
    const row = await Knex.select().from(TableNames.ROLES).where({ id: id });
    return row;
  }

  async create(title: Omit<IRole, "id">) {
    const [row] = await Knex.insert({ title: title })
      .into(TableNames.ROLES)
      .returning("*");
    return row;
  }

  async update(id: string, title: Omit<IRole, "id">) {
    const [row] = await Knex(TableNames.ROLES)
      .where({ id: id })
      .update({
        title: title,
      })
      .returning("*");
    return row;
  }

  async delete(id: string) {
    const deleteOp = await Knex(TableNames.ROLES).where("id", id).delete();
    return deleteOp;
  }
}

export default new RolesRepository;
