import { TableNames } from "../../database/eTableNames";
import { Knex } from "../../database/knex";
import { IOrgarnization } from "@/src/database/models";

class OrganizationsRepository {
  async findAll(orderBy: any = "ASC") {
    const direction = orderBy?.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await Knex<IOrgarnization[]>(TableNames.ORGANIZATIONS)
      .leftJoin(
        TableNames.USERS,
        `${TableNames.ORGANIZATIONS}.user_manager_id`,
        `${TableNames.USERS}.id`
      )
      .leftJoin(
        TableNames.ROLES,
        `${TableNames.USERS}.role_id`,
        `${TableNames.ROLES}.id`
      )
      .select(`${TableNames.ORGANIZATIONS}.*`)
      .select(
        `${TableNames.USERS}.username as manager_username`,
        `${TableNames.USERS}.email as manager_email`,
        `${TableNames.USERS}.avatar as manager_avatar`
      )
      .select(`${TableNames.ROLES}.title as manager_role`)
      .orderBy(`${TableNames.ORGANIZATIONS}.name`, direction);
    return rows;
  }

  async findByUser(userId: string) {
    const rows = await Knex<IOrgarnization[]>(TableNames.ORGANIZATIONS)
      .select(`${TableNames.ORGANIZATIONS}.*`)
      .select(
        `${TableNames.USERS}.username as manager_username`,
        `${TableNames.USERS}.email as manager_email`,
        `${TableNames.USERS}.avatar as manager_avatar`
      )
      .select(`${TableNames.ROLES}.title as manager_role`)
      .leftJoin(
        TableNames.USERS,
        `${TableNames.ORGANIZATIONS}.user_manager_id`,
        `${TableNames.USERS}.id`
      )
      .leftJoin(
        TableNames.ROLES,
        `${TableNames.USERS}.role_id`,
        `${TableNames.ROLES}.id`
      )
      .where(`${TableNames.ORGANIZATIONS}.user_manager_id`, userId);
    return rows;
  }
}

export default new OrganizationsRepository();
