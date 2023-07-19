import { Knex } from "knex";
import { TableNames } from "../eTableNames";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists(TableNames.ROLES_ORGANIZATION, (table) => {
      table
        .uuid("id")
        .primary()
        .unique()
        .index()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.text("title").notNullable().index();
      table.timestamps(true, true);
    })
    .then(() => {
      console.log(`### Created table: ${TableNames.ROLES_ORGANIZATION}`);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists(TableNames.ROLES_ORGANIZATION)
    .then(() => {
      console.log(`### Droped table: ${TableNames.ROLES_ORGANIZATION}`);
    });
}
