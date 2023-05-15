import { TableNames } from "../eTableNames";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex(TableNames.ROLES).insert([
    {
      title: "Scrum Master",
    },
    {
      title: "Architect Specialist",
    },
  ]);
}
