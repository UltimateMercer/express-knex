import { TableNames } from "../eTableNames";
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists(TableNames.TEAM_MEMBERS, (table) => {
      table
        .uuid("team_id")
        .notNullable()
        .references("teams.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .uuid("member_id")
        .notNullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .then(() => {
      console.log(`### Created table: ${TableNames.TEAM_MEMBERS}`);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableNames.TEAM_MEMBERS).then(() => {
    console.log(`### Droped table: ${TableNames.TEAM_MEMBERS}`);
  });
}
