import { TableNames } from "../../database/eTableNames";
import { Knex } from "../../database/knex";
import { IUser } from "@/src/database/models";

type GetUser = Omit<IUser, "password" | "hash_token">;

class UsersRepository {
  async findAll(orderBy: any = "ASC") {
    const direction = orderBy?.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await Knex<GetUser[]>(TableNames.USERS)
      .leftJoin(
        TableNames.ROLES,
        `${TableNames.USERS}.role_id`,
        `${TableNames.ROLES}.id`
      )
      .select(
        `${TableNames.USERS}.id`,
        `${TableNames.USERS}.name`,
        `${TableNames.USERS}.username`,
        `${TableNames.USERS}.email`,
        `${TableNames.USERS}.avatar`,
        `${TableNames.USERS}.description`,
        `${TableNames.USERS}.description`
      )
      .select(`${TableNames.ROLES}.title as role`)
      .orderBy("name", direction);
    return rows;
  }

  async findById(id: string) {
    const [row] = await Knex<GetUser>(TableNames.USERS)
      .leftJoin(
        TableNames.ROLES,
        `${TableNames.USERS}.role_id`,
        `${TableNames.ROLES}.id`
      )
      .select(
        `${TableNames.USERS}.id`,
        `${TableNames.USERS}.name`,
        `${TableNames.USERS}.username`,
        `${TableNames.USERS}.email`,
        `${TableNames.USERS}.avatar`,
        `${TableNames.USERS}.description`,
        `${TableNames.USERS}.description`
      )
      .select(`${TableNames.ROLES}.title as role`)
      .where(`${TableNames.USERS}.id`, "=", id);
    return row;
  }

  async findByUsername(username: string) {
    const [row] = await Knex<GetUser>(TableNames.USERS)
      .leftJoin(
        TableNames.ROLES,
        `${TableNames.USERS}.role_id`,
        `${TableNames.ROLES}.id`
      )
      .select(
        `${TableNames.USERS}.id`,
        `${TableNames.USERS}.name`,
        `${TableNames.USERS}.username`,
        `${TableNames.USERS}.email`,
        `${TableNames.USERS}.avatar`,
        `${TableNames.USERS}.description`,
        `${TableNames.USERS}.description`
      )
      .select(`${TableNames.ROLES}.title as role`)
      .where(`${TableNames.USERS}.username`, "=", username);
    return row;
  }

  async findByEmail(email: string) {
    const [row] = await Knex<GetUser>(TableNames.USERS)
      .leftJoin(
        TableNames.ROLES,
        `${TableNames.USERS}.role_id`,
        `${TableNames.ROLES}.id`
      )
      .select(
        `${TableNames.USERS}.id`,
        `${TableNames.USERS}.name`,
        `${TableNames.USERS}.username`,
        `${TableNames.USERS}.email`,
        `${TableNames.USERS}.avatar`,
        `${TableNames.USERS}.description`,
        `${TableNames.USERS}.description`
      )
      .select(`${TableNames.ROLES}.title as role`)
      .where(`${TableNames.USERS}.email`, "=", email);
    return row;
  }
}

export default new UsersRepository();
