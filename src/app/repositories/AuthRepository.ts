import { TableNames } from "../../database/eTableNames";
import { Knex } from "../../database/knex";

class AuthRepository {
  async login(id: string) {
    // const [row] = await Knex(TableNames.USERS).select(
    //   `${TableNames.USERS}.id`,
    //   `${TableNames.USERS}.username`,
    //   `${TableNames.USERS}.email`,
    //   `${TableNames.USERS}.password`,
    //   `${TableNames.USERS}.hash_token`
    // );
    // return row;
  }

  async authUser(login: string) {
    const [row] = await Knex(TableNames.USERS)
      .where(`${TableNames.USERS}.username`, login)
      .orWhere(`${TableNames.USERS}.email`, login)
      .select(
        `${TableNames.USERS}.id`,
        `${TableNames.USERS}.username`,
        `${TableNames.USERS}.email`,
        `${TableNames.USERS}.password`,
        `${TableNames.USERS}.hash_token`
      );
    return row;
  }
}

export default new AuthRepository();
