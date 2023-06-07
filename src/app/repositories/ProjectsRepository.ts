import { IProject } from "@/src/database/models";
import { TableNames } from "../../database/eTableNames";
import { Knex } from "../../database/knex";

class ProjectsRepository {
  async findAll(orderBy: any = "ASC") {
    const direction = orderBy?.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await Knex<IProject[]>(TableNames.PROJECTS)
      .select(`${TableNames.PROJECTS}.*`)
      .select(
        `${TableNames.USERS}.username as leader_username`,
        `${TableNames.USERS}.email as leader_email`,
        `${TableNames.USERS}.avatar as leader_avatar`
      )
      .select(`${TableNames.ROLES}.title as leader_role`)
      .select(
        `${TableNames.ORGANIZATIONS}.name as organization_name`,
        `${TableNames.ORGANIZATIONS}.logo as organization_logo`
      )
      .leftJoin(
        TableNames.USERS,
        `${TableNames.PROJECTS}.leader_id`,
        `${TableNames.USERS}.id`
      )
      .leftJoin(
        TableNames.ORGANIZATIONS,
        `${TableNames.PROJECTS}.organization_id`,
        `${TableNames.ORGANIZATIONS}.id`
      )
      .leftJoin(
        TableNames.ROLES,
        `${TableNames.USERS}.role_id`,
        `${TableNames.ROLES}.id`
      )
      .orderBy(`${TableNames.PROJECTS}.name`, direction);
    return rows;
  }

  async findByUser(userId: string) {
    const rows = await Knex<IProject[]>(TableNames.PROJECTS)
      .select(`${TableNames.PROJECTS}.*`)
      .select(
        `${TableNames.USERS}.username as leader_username`,
        `${TableNames.USERS}.email as leader_email`,
        `${TableNames.USERS}.avatar as leader_avatar`
      )
      .select(`${TableNames.ROLES}.title as leader_role`)
      .select(
        `${TableNames.ORGANIZATIONS}.name as organization_name`,
        `${TableNames.ORGANIZATIONS}.logo as organization_logo`
      )
      .leftJoin(
        TableNames.USERS,
        `${TableNames.PROJECTS}.leader_id`,
        `${TableNames.USERS}.id`
      )
      .leftJoin(
        TableNames.ORGANIZATIONS,
        `${TableNames.PROJECTS}.organization_id`,
        `${TableNames.ORGANIZATIONS}.id`
      )
      .leftJoin(
        TableNames.ROLES,
        `${TableNames.USERS}.role_id`,
        `${TableNames.ROLES}.id`
      )
      .where(`${TableNames.PROJECTS}.leader_id`, userId);
    return rows;
  }
}

export default new ProjectsRepository();
