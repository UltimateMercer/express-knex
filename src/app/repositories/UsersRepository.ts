import { TableNames } from "../../database/eTableNames";
import { Knex } from "../../database/knex";
import { IUser } from "@/src/database/models";

type GetUsers = Omit<IUser, "password" | "hash_token">;

class UsersRepository {
  async findAll(orderBy: any = "ASC") {
    const direction = orderBy?.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await Knex<GetUsers>(TableNames.USERS)
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
}

export default new UsersRepository();
