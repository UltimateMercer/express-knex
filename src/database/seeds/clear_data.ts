import { TableNames } from "../eTableNames";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex(TableNames.ROLES).del();
  await knex(TableNames.USERS).del();
  await knex(TableNames.ORGANIZATIONS).del();
  await knex(TableNames.PROJECTS).del();
  await knex(TableNames.TEAMS).del();
  await knex(TableNames.TEAM_MEMBERS).del();
  await knex(TableNames.TASKS).del();
  await knex(TableNames.RELEASES).del();
  await knex(TableNames.TASKS_RELEASE).del();
  await knex(TableNames.USERS).del();
  await knex(TableNames.COMMENTS).del();
}
